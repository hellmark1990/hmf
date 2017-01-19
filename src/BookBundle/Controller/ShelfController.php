<?php

namespace BookBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use BookBundle\Entity\Shelf;
use BookBundle\Form\ShelfType;

/**
 * Shelf controller.
 *
 * @Route("/shelf")
 */
class ShelfController extends Controller {

    /**
     * Lists all Shelf entities.
     *
     * @Route("/", name="shelf")
     * @Method("GET")
     * @Template()
     */
    public function indexAction(){
        $em = $this->getDoctrine()->getManager();

        $entities = $this->getUser()->getShelfs();

        $deleteForms = [];
        foreach ($entities as $entity) {
            $deleteForms[$entity->getId()] = $this->createDeleteForm($entity->getId())->createView();
        }

        return array(
            'entities' => $entities,
            'deleteForms' => $deleteForms,
        );
    }

    /**
     * Creates a new Shelf entity.
     *
     * @Route("/", name="shelf_create")
     * @Method("POST")
     * @Template("BookBundle:Shelf:new.html.twig")
     */
    public function createAction(Request $request){
        $entity = new Shelf();
        $form = $this->createCreateForm($entity);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $entity->setUser($this->getUser());

            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('shelf_edit', array('id' => $entity->getId())));
        }

        return array(
            'entity' => $entity,
            'form' => $form->createView(),
        );
    }

    /**
     * Creates a form to create a Shelf entity.
     *
     * @param Shelf $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateForm(Shelf $entity){
        $form = $this->createForm(new ShelfType(), $entity, array(
            'action' => $this->generateUrl('shelf_create'),
            'method' => 'POST',
            'user' => $this->getUser(),
        ));

        $form->add('submit', 'submit', array('label' => 'Create'));

        return $form;
    }

    /**
     * Displays a form to create a new Shelf entity.
     *
     * @Route("/new", name="shelf_new")
     * @Method("GET")
     * @Template()
     */
    public function newAction(){
        $entity = new Shelf();
        $form = $this->createCreateForm($entity);

        return array(
            'entity' => $entity,
            'form' => $form->createView(),
        );
    }

    /**
     * Finds and displays a Shelf entity.
     *
     * @Route("/{id}", name="shelf_show")
     * @Method("GET")
     * @Template()
     */
    public function showAction($id){
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('BookBundle:Shelf')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Shelf entity.');
        }

        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity' => $entity,
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Displays a form to edit an existing Shelf entity.
     *
     * @Route("/{id}/edit", name="shelf_edit")
     * @Method("GET")
     * @Template()
     */
    public function editAction($id){
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('BookBundle:Shelf')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Shelf entity.');
        }

        $editForm = $this->createEditForm($entity);
        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity' => $entity,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Creates a form to edit a Shelf entity.
     *
     * @param Shelf $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createEditForm(Shelf $entity){
        $form = $this->createForm(new ShelfType(), $entity, array(
            'action' => $this->generateUrl('shelf_update', array('id' => $entity->getId())),
            'method' => 'PUT',
            'user' => $this->getUser(),
        ));

        $form->add('submit', 'submit', array('label' => 'Update'));

        return $form;
    }

    /**
     * Edits an existing Shelf entity.
     *
     * @Route("/{id}", name="shelf_update")
     * @Method("PUT")
     * @Template("BookBundle:Shelf:edit.html.twig")
     */
    public function updateAction(Request $request, $id){
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('BookBundle:Shelf')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Shelf entity.');
        }

        $deleteForm = $this->createDeleteForm($id);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);

        if ($editForm->isValid()) {
            $em->flush();

            return $this->redirect($this->generateUrl('shelf_edit', array('id' => $id)));
        }

        return array(
            'entity' => $entity,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Deletes a Shelf entity.
     *
     * @Route("/delete/{id}", name="shelf_delete")
     */
    public function deleteAction(Request $request, $id){
        $em = $this->getDoctrine()->getManager();
        $entity = $em->getRepository('BookBundle:Shelf')->find($id);

        if ($entity->getUser()->getId() != $this->getUser()->getId()) {
            throw $this->createNotFoundException('Unable to delete Shelf entity.');
        }

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Shelf entity.');
        }

        $em->remove($entity);
        $em->flush();

        return $this->redirect($this->generateUrl('shelf'));
    }

    /**
     * Creates a form to delete a Shelf entity by id.
     *
     * @param mixed $id The entity id
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($id){
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('shelf_delete', array('id' => $id)))
            ->setMethod('DELETE')
            ->add('submit', 'submit', array('label' => 'Delete'))
            ->getForm();
    }
}
