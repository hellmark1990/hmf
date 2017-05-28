<?php
/**
 * Created by PhpStorm.
 * User: mark
 * Date: 28.01.16
 * Time: 1:58
 */

namespace SocialNetworkBundle\Services;

use ProfileBundle\Entity\User;
use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Bundle\TwigBundle\TwigEngine;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;


class SocialButtons {

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

    /**
     * Social Buttons parameters
     * @var
     */
    protected $parameters;

    /**
     * @var TwigEngine object
     */
    protected $templating;


    public function __construct(ContainerInterface $container, $em){
        $this->service_container = $container;
        $this->translator = $this->service_container->get('translator');
        $this->em = $em;
        $this->user = $this->service_container->get('security.token_storage')->getToken();
        $this->user = $this->user ? $this->user->getUser() : null;
        $this->templating = $this->service_container->get('templating');
    }

    /**
     * @param array $parameters - ['url', 'title', 'image']
     */
    public function setParameters(array $parameters = []){
        $this->parameters = $parameters;
        return $this;
    }

    public function renderButtons(){
        return $this->templating->render('SocialNetworkBundle:Buttons:all.html.twig', $this->parameters);
    }


}