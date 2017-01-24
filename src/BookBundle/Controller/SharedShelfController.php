<?php

namespace BookBundle\Controller;

use BookBundle\Entity\Shelf;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use BookBundle\Entity\SharedShelf;
use BookBundle\Form\SharedShelfType;

/**
 * SharedShelf controller.
 *
 * @Route("/shared")
 */
class SharedShelfController extends Controller {

    /**
     * Lists all SharedShelf entities.
     *
     * @Route("/shelf/{shelfId}", name="shared_shelf_users")
     * @Method("GET")
     * @Template()
     */
    public function indexAction($shelfId){
        $em = $this->getDoctrine()->getManager();

        /**
         * @var Shelf $shelf
         */
        $shelf = $em->getRepository('BookBundle:Shelf')->find($shelfId);

        $entity = new SharedShelf();
        $entity->setUserOwner($this->getUser());
        $entity->setShelf($shelf);

        $form = $this->createCreateForm($entity);

        return array(
            'shelf' => $shelf,
            'form' => $form->createView(),
        );
    }

    /**
     * Creates a new SharedShelf entity.
     *
     * @Route("/", name="shared_create")
     * @Method("POST")
     * @Template("BookBundle:SharedShelf:new.html.twig")
     */
    public function createAction(Request $request){
        $entity = new SharedShelf();
        $form = $this->createCreateForm($entity);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('shared_shelf_users', array('shelfId' => $entity->getShelf()->getId())));
        }

        return array(
            'entity' => $entity,
            'form' => $form->createView(),
        );
    }

    /**
     * Creates a form to create a SharedShelf entity.
     *
     * @param SharedShelf $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateForm(SharedShelf $entity){
        $form = $this->createForm($this->get('app.form.type.share_shelf'), $entity, array(
            'action' => $this->generateUrl('shared_create'),
            'method' => 'POST',
        ));

        return $form;
    }

    /**
     * Displays a form to create a new SharedShelf entity.
     *
     * @Route("/new", name="shared_new")
     * @Method("GET")
     * @Template()
     */
    public function newAction(){
        $entity = new SharedShelf();
        $form = $this->createCreateForm($entity);

        return array(
            'entity' => $entity,
            'form' => $form->createView(),
        );
    }

    /**
     * Finds and displays a SharedShelf entity.
     *
     * @Route("/{id}", name="shared_show")
     * @Method("GET")
     * @Template()
     */
    public function showAction($id){
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('BookBundle:SharedShelf')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find SharedShelf entity.');
        }

        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity' => $entity,
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Displays a form to edit an existing SharedShelf entity.
     *
     * @Route("/{id}/edit", name="shared_edit")
     * @Method("GET")
     * @Template()
     */
    public function editAction($id){
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('BookBundle:SharedShelf')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find SharedShelf entity.');
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
     * Creates a form to edit a SharedShelf entity.
     *
     * @param SharedShelf $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createEditForm(SharedShelf $entity){
        $form = $this->createForm(new SharedShelfType(), $entity, array(
            'action' => $this->generateUrl('shared_update', array('id' => $entity->getId())),
            'method' => 'PUT',
        ));

        $form->add('submit', 'submit', array('label' => 'Update'));

        return $form;
    }

    /**
     * Edits an existing SharedShelf entity.
     *
     * @Route("/{id}", name="shared_update")
     * @Method("PUT")
     * @Template("BookBundle:SharedShelf:edit.html.twig")
     */
    public function updateAction(Request $request, $id){
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('BookBundle:SharedShelf')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find SharedShelf entity.');
        }

        $deleteForm = $this->createDeleteForm($id);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);

        if ($editForm->isValid()) {
            $em->flush();

            return $this->redirect($this->generateUrl('shared_edit', array('id' => $id)));
        }

        return array(
            'entity' => $entity,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Deletes a SharedShelf entity.
     *
     * @Route("/delete/{shelfId}/{userToShareId}", name="shared_delete_user")
     */
    public function deleteAction(Request $request, $shelfId, $userToShareId){
        $em = $this->getDoctrine()->getManager();
        $shelf = $em->getRepository('BookBundle:Shelf')->find($shelfId);
        $userToShare = $em->getRepository('ProfileBundle:User')->find($userToShareId);

        $entity = $em->getRepository('BookBundle:SharedShelf')->findOneBy([
            'shelf' => $shelf,
            'userToShare' => $userToShare,
            'userOwner' => $this->getUser(),
        ]);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find SharedShelf entity.');
        }

        $em->remove($entity);
        $em->flush();

        return $this->redirect($this->generateUrl('shared_shelf_users', ['shelfId' => $shelfId]));
    }

    /**
     * Creates a form to delete a SharedShelf entity by id.
     *
     * @param mixed $id The entity id
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($id){
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('shared_delete', array('id' => $id)))
            ->setMethod('DELETE')
            ->add('submit', 'submit', array('label' => 'Delete'))
            ->getForm();
    }
}
