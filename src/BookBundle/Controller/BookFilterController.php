<?php

namespace BookBundle\Controller;

use Gaufrette\File;
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

/**
 * Book filter controller.
 *
 * @Route("/filter")
 */
class BookFilterController extends Controller {

    /**
     * Lists all Book entities.
     *
     * @Route("/options", name="book_filter_options")
     * @Method("GET")
     */
    public function filterOptionsAction(){
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

}
