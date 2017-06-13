<?php

namespace BookBundle\Controller;

use BookBundle\Entity\Book;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use BookBundle\Entity\Read;
use BookBundle\Form\ReadType;

/**
 * Read controller.
 *
 * @Route("/read")
 */
class ReadController extends Controller {

    /**
     * Lists all Read entities.
     *
     * @Route("/", name="read")
     * @Method("GET")
     * @Template()
     */
    public function indexAction(){
        $em = $this->getDoctrine()->getManager();

        $entities = $em->getRepository('BookBundle:Read')->findAll();

        return array(
            'entities' => $entities,
        );
    }

    /**
     * Creates a new Read entity.
     *
     * @Route("/", name="read_create")
     * @Method("POST")
     * @Template("BookBundle:Read:new.html.twig")
     */
    public function createAction(Request $request){
        $entity = new Read();
        $form = $this->createCreateForm($entity);
        $form->handleRequest($request);

        /**
         * Validate image file
         */
        $fileValidator = $this->get('app.file_validatator');
        if ($entity->getImage() && !$fileValidator->validate($entity->getImage(), [
                'fieldName' => $form->get('image')->getName(),
                'maxSize' => $this->getParameter('max_upload_size'),
                'mimeTypes' => ['image/png', 'image/jpeg', 'image/jpg']
            ])
        ) {
            $form->get('image')
                ->get('binaryContent')
                ->addError(new FormError($fileValidator->getMessage()));
        }

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('read_book_edit', array('id' => $entity->getId(), 'bookId' => $entity->getBook()->getId())));
        }

        return array(
            'entity' => $entity,
            'form' => $form->createView(),
        );
    }

    /**
     * Creates a form to create a Read entity.
     *
     * @param Read $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateForm(Read $entity){
        $form = $this->createForm(ReadType::class, $entity, array(
            'action' => $this->generateUrl('read_create'),
            'method' => 'POST',
        ));

        return $form;
    }

    /**
     * Displays a form to create a new Read entity.
     *
     * @Route("/new", name="read_new")
     * @Method("GET")
     * @Template()
     */
    public function newAction(){
        $entity = new Read();
        $form = $this->createCreateForm($entity);

        return array(
            'entity' => $entity,
            'form' => $form->createView(),
        );
    }

    /**
     * Displays a form to create a new Read entity.
     *
     * @Route("/new/{id}/book", name="read_new_book")
     * @Method("GET")
     * @Template()
     */
    public function newBookAction(Book $book){
        $entity = new Read();
        $entity->setBook($book);
        $form = $this->createCreateForm($entity);

        return array(
            'entity' => $entity,
            'form' => $form->createView(),
        );
    }

    /**
     * Finds and displays a Read entity.
     *
     * @Route("/{id}", name="read_show")
     * @Method("GET")
     * @Template()
     */
    public function showAction($id){
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('BookBundle:Read')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Read entity.');
        }

        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity' => $entity,
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Displays a form to edit an existing Read entity.
     *
     * @Route("/{id}/edit", name="read_edit")
     * @Method("GET")
     * @Template()
     */
    public function editAction($id){
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('BookBundle:Read')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Read entity.');
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
     * Displays a form to create a new Read entity.
     *
     * @Route("{id}/edit/{bookId}/book", name="read_book_edit")
     * @Method("GET")
     * @Template()
     */
    public function editBookAction($id, $bookId){
        $em = $this->getDoctrine()->getManager();

        $book = $em->getRepository('BookBundle:Book')->find($bookId);
        $entity = $em->getRepository('BookBundle:Read')->getByBook($id, $book);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Read entity.');
        }

        $editForm = $this->createEditForm($entity);
        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity' => $entity,
            'form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );

    }

    /**
     * Creates a form to edit a Read entity.
     *
     * @param Read $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createEditForm(Read $entity){
        $form = $this->createForm(ReadType::class, $entity, array(
            'action' => $this->generateUrl('read_update', array('id' => $entity->getId())),
            'method' => 'PUT',
        ));

        return $form;
    }

    /**
     * Edits an existing Read entity.
     *
     * @Route("/{id}", name="read_update")
     * @Method("PUT")
     * @Template("BookBundle:Read:edit.html.twig")
     */
    public function updateAction(Request $request, $id){
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('BookBundle:Read')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Read entity.');
        }

        $deleteForm = $this->createDeleteForm($id);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);

        /**
         * Validate image file
         */
        $fileValidator = $this->get('app.file_validatator');
        if ($entity->getImage() && !$fileValidator->validate($entity->getImage(), [
                'fieldName' => $editForm->get('image')->getName(),
                'maxSize' => $this->getParameter('max_upload_size'),
                'mimeTypes' => ['image/png', 'image/jpeg', 'image/jpg']
            ])
        ) {
            $editForm->get('image')
                ->get('binaryContent')
                ->addError(new FormError($fileValidator->getMessage()));
        }

        if ($editForm->isValid()) {
            $em->flush();

            return $this->redirect($this->generateUrl('read_edit', array('id' => $id)));
        }

        return array(
            'entity' => $entity,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }


    /**
     * Edits an existing Read entity.
     *
     * @Route("/{id}/book/{bookId}", name="read_book_update")
     * @Method("PUT")
     * @Template("BookBundle:Read:edit.html.twig")
     */
    public function updateBookAction(Request $request, $id, $bookId){
        $em = $this->getDoctrine()->getManager();

        $book = $em->getRepository('BookBundle:Book')->find($bookId);
        $entity = $em->getRepository('BookBundle:Read')->getByBook($id, $book);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Read entity.');
        }

        $deleteForm = $this->createDeleteForm($id);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);

        if ($editForm->isValid()) {
            $em->flush();

            return $this->redirect($this->generateUrl('read_book_edit', array('id' => $id, 'bookId' => $bookId)));
        }

        return array(
            'entity' => $entity,
            'form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Deletes a Read entity.
     *
     * @Route("/delete/{id}", name="read_delete")
     */
    public function deleteAction(Request $request, $id){
        $em = $this->getDoctrine()->getManager();
        $entity = $em->getRepository('BookBundle:Read')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Read entity.');
        }

        if ($entity->getBook()->getUser()->getId() != $this->getUser()->getId()) {
            throw $this->createNotFoundException('Unable to delete Read entity.');
        }

        $book = $entity->getBook();

        $em->remove($entity);
        $em->flush();

        return $this->redirect($this->generateUrl('book_reading', ['id' => $book->getId()]));
    }

    /**
     * Creates a form to delete a Read entity by id.
     *
     * @param mixed $id The entity id
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($id){
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('read_delete', array('id' => $id)))
            ->setMethod('DELETE')
            ->add('submit', 'submit', array('label' => 'Delete'))
            ->getForm();
    }
}
