<?php

namespace BookBundle\Controller;

use Gaufrette\File;
use Sonata\MediaBundle\Model\Media;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use BookBundle\Entity\Book;
use BookBundle\Form\BookType;
use Symfony\Component\Intl\Locale\Locale;

/**
 * Book controller.
 *
 * @Route("/book")
 */
class BookController extends Controller {

    /**
     * Lists all Book entities.
     *
     * @Route("/", name="book")
     * @Method("GET")
     * @Template()
     */
    public function indexAction(){
        $em = $this->getDoctrine()->getManager();

        $entities = $this->getUser()->getBooks();

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
     * Creates a new Book entity.
     *
     * @Route("/", name="book_create")
     * @Method("POST")
     * @Template("BookBundle:Book:new.html.twig")
     */
    public function createAction(Request $request){
        $entity = new Book();
        $form = $this->createCreateForm($entity);
        $form->handleRequest($request);
        $em = $this->getDoctrine()->getManager();

        foreach ($entity->getShelfs() as $shelf) {
            $entity->addShelf($shelf);
            if (!$shelf->getBooks()->contains($entity)) {
                $shelf->addBook($entity);
            }
        }

        if ($request->get('bookbundle_book')['imageUrl']) {
            $tmpImagePath = $this->get('kernel')->getRootDir() . '/../web/uploads/tmp_image.jpg';
            $imageData = file_get_contents($request->get('bookbundle_book')['imageUrl']);
            file_put_contents($tmpImagePath, $imageData);

            $image = new \Application\Sonata\MediaBundle\Entity\Media();
            $image->setBinaryContent($tmpImagePath);
            $image->setProviderName('sonata.media.provider.image');
            $image->setContext('book');
            $entity->setImage($image);
        }

        if ($form->isValid()) {
            $entity->setUser($this->getUser());

            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('book_edit', array('id' => $entity->getId())));
        }

        return array(
            'entity' => $entity,
            'form' => $form->createView(),
        );
    }

    /**
     * Creates a form to create a Book entity.
     *
     * @param Book $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateForm(Book $entity){
        $form = $this->createForm(new BookType(), $entity, array(
            'action' => $this->generateUrl('book_create'),
            'method' => 'POST',
        ));

        $form->add('submit', 'submit', array('label' => 'Create'));

        return $form;
    }

    /**
     * Displays a form to create a new Book entity.
     *
     * @Route("/new", name="book_new")
     * @Method("GET")
     * @Template()
     */
    public function newAction(){
        $entity = new Book();
        $form = $this->createCreateForm($entity);

        return array(
            'entity' => $entity,
            'form' => $form->createView(),
        );
    }

    /**
     * Finds and displays a Book entity.
     *
     * @Route("/{id}", name="book_show")
     * @Method("GET")
     * @Template()
     */
    public function showAction($id){
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('BookBundle:Book')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Book entity.');
        }

        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity' => $entity,
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Displays a form to edit an existing Book entity.
     *
     * @Route("/{id}/edit", name="book_edit")
     * @Method("GET")
     * @Template()
     */
    public function editAction($id){
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('BookBundle:Book')->findOneBy(['id' => $id, 'user' => $this->getUser()]);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Book entity.');
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
     * Creates a form to edit a Book entity.
     *
     * @param Book $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createEditForm(Book $entity){
        $form = $this->createForm(new BookType(), $entity, array(
            'action' => $this->generateUrl('book_update', array('id' => $entity->getId())),
            'method' => 'PUT',
        ));

        $form->add('submit', 'submit', array('label' => 'Update'));

        return $form;
    }

    /**
     * Edits an existing Book entity.
     *
     * @Route("/{id}", name="book_update")
     * @Method("PUT")
     * @Template("BookBundle:Book:edit.html.twig")
     */
    public function updateAction(Request $request, $id){
        $em = $this->getDoctrine()->getManager();

        /**
         * @var $entity Book
         */
        $entity = $em->getRepository('BookBundle:Book')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Book entity.');
        }

        foreach ($entity->getShelfs() as $shelf) {
            if ($shelf->getBooks()->contains($entity)) {
                $shelf->removeBook($entity);
            }
        }
        $entity->getShelfs()->clear();
        $em->flush();

        $previousImageUrl = $entity->getImageUrl();

        $deleteForm = $this->createDeleteForm($id);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);

        $entity->getImage()->setContext('book');

        if ($previousImageUrl != $request->get('bookbundle_book')['imageUrl']) {
            $tmpImagePath = $this->get('kernel')->getRootDir() . '/../web/uploads/tmp_image.jpg';
            $image = file_get_contents($request->get('bookbundle_book')['imageUrl']);
            file_put_contents($tmpImagePath, $image);
            $entity->getImage()->setBinaryContent($tmpImagePath);
        }

        foreach ($entity->getShelfs() as $shelf) {
            $entity->addShelf($shelf);
            if (!$shelf->getBooks()->contains($entity)) {
                $shelf->addBook($entity);
            }
        }

        if ($editForm->isValid()) {
            $em->flush();

            return $this->redirect($this->generateUrl('book_edit', array('id' => $id)));
        }

        return array(
            'entity' => $entity,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Deletes a Book entity.
     *
     * @Route("/{id}", name="book_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, $id){
        $form = $this->createDeleteForm($id);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $entity = $em->getRepository('BookBundle:Book')->find($id);

            if (!$entity) {
                throw $this->createNotFoundException('Unable to find Book entity.');
            }

            $em->remove($entity);
            $em->flush();
        }

        return $this->redirect($this->generateUrl('book'));
    }

    /**
     * Creates a form to delete a Book entity by id.
     *
     * @param mixed $id The entity id
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($id){
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('book_delete', array('id' => $id)))
            ->setMethod('DELETE')
            ->add('submit', 'submit', array('label' => 'Delete'))
            ->getForm();
    }

    /**
     * @Route("/search/in/google", name="book_search_google")
     */
    public function ajax_google_search_books(Request $request){
        if (empty($request->get('term'))) {
            return new JsonResponse([]);
        }

        $search_result = $this->get('book.google_search')->search($request->get('term'));

        $result = [];
        foreach ($search_result as $book) {
            $authors = implode(',', (array)$book['volumeInfo']['authors']);

            $result[] = [
                'title' => $book['volumeInfo']['title'],
                'authors' => $authors,
                'thumbnail' => $book['volumeInfo']['imageLinks']['thumbnail'],
                'publisher' => $book['volumeInfo']['publisher'],
                'publishedDate' => $book['volumeInfo']['publishedDate'],
                'description' => $book['volumeInfo']['description'],
                'pageCount' => $book['volumeInfo']['pageCount'],
                'printedPageCount' => $book['volumeInfo']['printedPageCount'],
                'language' => $book['volumeInfo']['language'],
                'previewLink' => $book['volumeInfo']['previewLink'],
            ];
        }

        return new JsonResponse($result);
    }
}
