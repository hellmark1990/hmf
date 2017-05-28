<?php
/**
 * Created by PhpStorm.
 * User: mark
 * Date: 28.01.16
 * Time: 1:58
 */

namespace BookBundle\Services;

use ProfileBundle\Entity\User;
use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;


class BookWidget {

    /**
     * @var ContainerInterface
     */
    protected $service_container;

    /**
     * @var DataCollectorTranslator
     */
    protected $translator;

    /**
     * @var
     */
    protected $em;

    /**
     * @var User
     */
    protected $user;



    public function __construct(ContainerInterface $container, $em){
        $this->service_container = $container;
        $this->translator = $this->service_container->get('translator');
        $this->em = $em;
        $this->user = $this->service_container->get('security.token_storage')->getToken();
        $this->user = $this->user ? $this->user->getUser() : null;
    }

    public function getBestReaders(){
        return $this->em->getRepository('ProfileBundle:User')->getBestReaders();
    }


}