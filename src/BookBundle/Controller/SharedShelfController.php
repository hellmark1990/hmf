<?php

namespace BookBundle\Controller;

use BookBundle\Entity\SharedBookLink;
use BookBundle\Entity\SharedShelfLink;
use BookBundle\Entity\Shelf;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use BookBundle\Entity\SharedShelf;
use BookBundle\Form\SharedShelfType;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;

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
        $formEmail = $this->createCreateEmailForm($shelf);

        return array(
            'shelf' => $shelf,
            'form' => $form->createView(),
            'formEmail' => $formEmail->createView(),
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

        $status = false;
        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();
            $status = true;
        }

        return array(
            'entity' => $entity,
            'status' => $status,
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
     * Creates a new SharedShelf entity by email.
     *
     * @Route("/{shelfId}/email", name="shared_create_email")
     * @Method("POST")
     * @Template("BookBundle:SharedShelf:new_email.html.twig")
     */
    public function createEmailAction(Request $request, $shelfId){
        $em = $this->getDoctrine()->getManager();
        $shelf = $em->getRepository('BookBundle:Shelf')->find($shelfId);

        if (!$shelf) {
            throw $this->createNotFoundException('Unable to find Shelf.');
        }

        $entity = new SharedShelf();

        $form = $this->createCreateEmailForm($shelf);
        $form->handleRequest($request);

        $status = false;
        if ($form->isValid()) {
            $formData = $form->getData();
            $userToShare = $this->get('profile.user_creator_api')->createUserByEmail($formData['email']);

            if (!$userToShare) {
                throw $this->createNotFoundException('Unable to share.');
            }

            $entity->setUserOwner($this->getUser());
            $entity->setUserToShare($userToShare);
            $entity->setShelf($shelf);
            $entity->setType($formData['type']);

            $em->persist($entity);
            $em->flush();

            $this->get('book.shared_shelf_messenger')->sendSharedEmail($entity);

            $status = true;
        }

        return array(
            'entity' => $entity,
            'status' => $status,
            'form' => $form->createView(),
        );
    }


    /**
     * Creates a form to create a SharedShelf entity by email.
     *
     * @param SharedShelf $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateEmailForm(Shelf $entity){
        $form = $this->createForm($this->get('app.form.type.share_shelf_email'), [], array(
            'action' => $this->generateUrl('shared_create_email', ['shelfId' => $entity->getId()]),
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
     * Deletes a SharedShelf entity.
     *
     * @Route("/delete/share-to-me/shelf/{id}", name="shared_share_to_me_shelf")
     */
    public function deleteShareToMeAction(Request $request, $id){
        $em = $this->getDoctrine()->getManager();
        $shelf = $em->getRepository('BookBundle:Shelf')->find($id);

        $entity = $em->getRepository('BookBundle:SharedShelf')->findOneBy([
            'shelf' => $shelf,
            'userToShare' => $this->getUser(),
        ]);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find shelf entity.');
        }

        $em->remove($entity);
        $em->flush();

        return $this->redirect($this->generateUrl('shared_to_user_shelves'));
    }


    /**
     * Get shared shelf link.
     *
     * @Route("/share-link/{shelfId}", name="shared_shelf_link")
     */
    public function sharedShelfLinkAction(Request $request, $shelfId){
        $em = $this->getDoctrine()->getManager();
        $shelf = $em->getRepository('BookBundle:Shelf')->find($shelfId);

        if (!$shelf) {
            return new JsonResponse([
                'success' => false,
            ]);
        }

        /**
         * @var  SharedShelfLink $sharedLink
         */
        $sharedLink = $em->getRepository('BookBundle:SharedShelfLink')->findOneBy([
            'shelf' => $shelf,
            'userOwner' => $this->getUser(),
        ]);

        if (!$sharedLink) {
            $tokenGenerator = $this->get('fos_user.util.token_generator');

            $sharedLink = new SharedShelfLink();
            $sharedLink->setUserOwner($this->getUser());
            $sharedLink->setShelf($shelf);
            $sharedLink->setSalt(substr($tokenGenerator->generateToken(), 0, 20));

            $em->persist($sharedLink);
            $em->flush();
        }

        return new JsonResponse([
            'success' => true,
            'shareLink' => $this->generateUrl('shared_shelf_by_salt', ['salt' => $sharedLink->getSalt()], UrlGeneratorInterface::ABSOLUTE_URL)
        ]);

    }


    /**
     * Get shared shelf link.
     *
     * @Route("/book-link/{bookId}", name="shared_book_link")
     */
    public function sharedBookLinkAction(Request $request, $bookId){
        $em = $this->getDoctrine()->getManager();
        $book = $em->getRepository('BookBundle:Book')->find($bookId);

        if (!$book) {
            return new JsonResponse([
                'success' => false,
            ]);
        }

        /**
         * @var  SharedBookLink $sharedLink
         */
        $sharedLink = $em->getRepository('BookBundle:SharedBookLink')->findOneBy([
            'shelf' => $book,
            'userOwner' => $this->getUser(),
        ]);

        if (!$sharedLink) {
            $tokenGenerator = $this->get('fos_user.util.token_generator');

            $sharedLink = new SharedBookLink();
            $sharedLink->setUserOwner($this->getUser());
            $sharedLink->setBook($book);
            $sharedLink->setSalt(substr($tokenGenerator->generateToken(), 0, 20));

            $em->persist($sharedLink);
            $em->flush();
        }

        return new JsonResponse([
            'success' => true,
            'shareLink' => $this->generateUrl('shared_book_by_salt', ['salt' => $sharedLink->getSalt()], UrlGeneratorInterface::ABSOLUTE_URL)
        ]);

    }

    /**
     * Get shared shelf link.
     *
     * @Route("/book/{salt}", name="shared_book_by_salt")
     * @Template()
     */
    public function sharedBookBySaltAction(Request $request, $salt){
        /**
         * @var $shareLink SharedShelfLink
         */
        $em = $this->getDoctrine()->getManager();
        $sharedLink = $em->getRepository('BookBundle:SharedBookLink')->findOneBy([
            'salt' => $salt
        ]);

        if (!$sharedLink) {
            throw $this->createNotFoundException('Unable to find Book.');
        }

        if (!$sharedLink->getBook()) {
            throw $this->createNotFoundException('Unable to find Book.');
        }

        return array(
            'book' => $sharedLink->getBook(),
            'salt' => $salt
        );

    }

    /**
     * Get shared shelf link.
     *
     * @Route("/shelf/salt-{salt}/books", name="shared_shelf_by_salt")
     * @Template()
     */
    public function sharedShelfBySaltAction(Request $request, $salt){
        /**
         * @var $shareLink SharedShelfLink
         */
        $em = $this->getDoctrine()->getManager();
        $sharedLink = $em->getRepository('BookBundle:SharedShelfLink')->findOneBy([
            'salt' => $salt
        ]);

        if (!$sharedLink) {
            throw $this->createNotFoundException('Unable to find Shelf.');
        }

        if (!$sharedLink->getShelf()) {
            throw $this->createNotFoundException('Unable to find Shelf.');
        }

        return array(
            'shelf' => $sharedLink->getShelf(),
            'salt' => $salt
        );

    }

    /**
     * Get shared shelf link.
     *
     * @Route("/shelf/{id}/books", name="shared_shelf_by_id", requirements={"id": "\d+"})
     * @Template("BookBundle:SharedShelf:sharedShelfBySalt.html.twig")
     */
    public function sharedShelfAction(Request $request, $id){
        /**
         * @var $shareLink SharedShelfLink
         */
        $em = $this->getDoctrine()->getManager();
        $shelf = $em->getRepository('BookBundle:Shelf')->find($id);
        $sharedShelf = $em->getRepository('BookBundle:SharedShelf')->findOneBy([
            'shelf' => $shelf,
            'userToShare' => $this->getUser(),
        ]);

        if (!$sharedShelf) {
            throw $this->createNotFoundException('Unable to find Shelf.');
        }

        if (!$sharedShelf->getShelf()) {
            throw $this->createNotFoundException('Unable to find Shelf.');
        }

        return array(
            'shelf' => $shelf,
            'salt' => false
        );
    }

    /**
     * Get shared shelf link.
     *
     * @Route("/shelves", name="shared_to_user_shelves")
     * @Template()
     */
    public function sharedToUserShelvesAction(Request $request){
        $sharedShelves = $this->getUser()->getSharedShelfsToMe();

        return [
            'entities' => $sharedShelves
        ];
    }

    /**
     * Get shared shelf link.
     *
     * @Route("/shelf/{shelfId}/book/{bookId}", name="shared_shelf_book")
     * @Template()
     */
    public function sharedBookView(Request $request, $shelfId, $bookId){
        $em = $this->getDoctrine()->getManager();
        $shelf = $em->getRepository('BookBundle:Shelf')->find($shelfId);

        if (!$shelf) {
            throw $this->createNotFoundException('Unable to find Shelf.');
        }

        if ($request->get('salt')) {
            $sharedLink = $em->getRepository('BookBundle:SharedShelfLink')->findOneBy([
                'salt' => $request->get('salt')
            ]);

            if (!$sharedLink) {
                throw $this->createNotFoundException('Unable to find Shelf.');
            }
        } else {
            if (!$this->getUser()->getSharedShelfsToMe()->contains($shelf)) {
                throw $this->createNotFoundException('Unable to find Shelf.');
            }
        }

        $book = $em->getRepository('BookBundle:Book')->find($bookId);
        if (!$shelf->getBooks()->contains($book)) {
            throw $this->createNotFoundException('Unable to find book.');
        }

        return [
            'book' => $book
        ];
    }


}
