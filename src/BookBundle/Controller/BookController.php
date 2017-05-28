<?php

namespace BookBundle\Controller;

use Gaufrette\File;
use ProfileBundle\Entity\User;
use Sonata\MediaBundle\Model\Media;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use BookBundle\Entity\Book;
use BookBundle\Form\BookType;
use Symfony\Component\Intl\Locale\Locale;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

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
    public function indexAction(Request $request){
        $em = $this->getDoctrine()->getManager();

        $entities = $this->get('book.filter')->getBooks($request);

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
     * Finds and displays a Book Reads.
     *
     * @Route("/{id}/reading/", name="book_reading")
     * @Method("GET")
     * @Template()
     */
    public function readingAction($id){
        $em = $this->getDoctrine()->getManager();

        /**
         * @var $entity Book
         */
        $entity = $em->getRepository('BookBundle:Book')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Book entity.');
        }

        return array(
            'entity' => $entity,
            'reads' => $entity->getReads(),
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

        if ($request->get('book')['imageUrl']) {
            $tmpImagePath = $this->get('kernel')->getRootDir() . '/../web/uploads/tmp_image.jpg';
            $imageData = file_get_contents($request->get('book')['imageUrl']);
            file_put_contents($tmpImagePath, $imageData);

            $image = new \Application\Sonata\MediaBundle\Entity\Media();
            $image->setBinaryContent($tmpImagePath);
            $image->setProviderName('sonata.media.provider.image');
            $image->setContext('book');
            $entity->setImage($image);
        }else{
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
        $form = $this->createForm(BookType::class, $entity, array(
            'action' => $this->generateUrl('book_create'),
            'method' => 'POST',
            'user' => $this->getUser(),
            'container' => $this->container,
        ));

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
        $form = $this->createForm(BookType::class, $entity, array(
            'action' => $this->generateUrl('book_update', array('id' => $entity->getId())),
            'method' => 'PUT',
            'user' => $this->getUser(),
            'container' => $this->container,
        ));

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

        if ($previousImageUrl != $request->get('book')['imageUrl'] && $request->get('book')['imageUrl']) {
            if (!$entity->getImage()) {
                $image = new \Application\Sonata\MediaBundle\Entity\Media();
                $image->setProviderName('sonata.media.provider.image');
                $image->setContext('book');
                $entity->setImage($image);
            }

            $tmpImagePath = $this->get('kernel')->getRootDir() . '/../web/uploads/tmp_image.jpg';
            $imageContent = file_get_contents($request->get('book')['imageUrl']);
            file_put_contents($tmpImagePath, $imageContent);
            $entity->getImage()->setBinaryContent($tmpImagePath);

        }else{
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
            'form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Deletes a Book entity.
     *
     * @Route("/delete/{id}", name="book_delete")
     */
    public function deleteAction(Request $request, $id){
        $em = $this->getDoctrine()->getManager();
        $entity = $em->getRepository('BookBundle:Book')->find($id);

        if ($entity->getUser()->getId() != $this->getUser()->getId()) {
            throw $this->createNotFoundException('Unable to delete Book entity.');
        }

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Book entity.');
        }

        $em->remove($entity);
        $em->flush();

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

    /**
     *  @Route("/public/user/{userId}", name="book_list_user_public")
     *  @Template("BookBundle:Book:public.html.twig")
     */
    public function publicUserBooksAction(Request $request, $userId){
        $em = $this->getDoctrine()->getManager();
        /**
         * @var User $user
         */
        $user = $em->getRepository('ProfileBundle:User')->find($userId);

        if(!$user->isPublic()){
            throw new AccessDeniedException('You can not access to this page');
        }

        return array(
            'user' => $user,
        );
    }

    /**
     *  @Route("/public/{id}", name="book_public_view")
     *  @Template("BookBundle:Book:public_view.html.twig")
     */
    public function publicBookAction(Request $request, $id){
        $em = $this->getDoctrine()->getManager();
        /**
         * @var Book $book
         */
        $book = $em->getRepository('BookBundle:Book')->find($id);

//        if(!$book->isPublic()){
//            throw new AccessDeniedException('You can not access to this page');
//        }

        return array(
            'book' => $book,
        );
    }
}
