<?php
/**
 * Created by PhpStorm.
 * User: mark
 * Date: 28.01.16
 * Time: 1:58
 */

namespace SocialNetworkBundle\Services;

use ProfileBundle\Entity\User;
use SocialNetworkBundle\SocialNetworks\Facebook;
use SocialNetworkBundle\SocialNetworks\Twitter;
use SocialNetworkBundle\SocialNetworks\VK;
use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Bundle\TwigBundle\TwigEngine;
use Symfony\Component\DependencyInjection\ContainerBuilder;
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

    /**
     * Configs defined by Configuration
     * @var
     */
    public $configs;


    public function __construct($container, $em){
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
    protected function setParameters(array $parameters = []){
        if(!isset($parameters['image'])){
            $parameters['image'] = ['url' => '', 'width' => '', 'height'=> ''];
        }
        $this->parameters = $parameters;
    }

    protected function renderButtons($socials){
        return $this->templating->render('SocialNetworkBundle:Buttons:all.html.twig', ['socials' => $socials]);
    }

    public function show(array $parameters = []){
        $this->setParameters($parameters);

        $socials = [];
        if (isset($this->configs['socials']['facebook'])) {
            $socials['facebook'] = (new Facebook($this->templating))
                ->setApiKey($this->configs['socials']['facebook']['app_id'])
                ->setParameters($this->parameters)
                ->get();
        }

        if (isset($this->configs['socials']['twitter'])) {
            $socials['twitter'] = (new Twitter($this->templating))
                ->setParameters($this->parameters)
                ->get();
        }

        if (isset($this->configs['socials']['vk'])) {
            $socials['vk'] = (new VK($this->templating))
                ->setParameters($this->parameters)
                ->get();
        }

        return $this->renderButtons($socials);
    }


}