<?php

namespace SocialNetworkBundle\SocialNetworks;

/**
 * Created by PhpStorm.
 * User: mark
 * Date: 30.05.17
 * Time: 22:20
 */
class Facebook {

    /**
     * Share parameters
     * @var
     */
    protected $params;

    /**
     * @var
     */
    protected $apiKey;

    /**
     * @var TwigEngine object
     */
    protected $templating;

    /**
     * Social Buttons parameters
     * @var
     */
    protected $parameters;

    public function __construct($templating){
        $this->templating = $templating;
    }

    public function setApiKey($apiKey){
        $this->apiKey = $apiKey;
        return $this;
    }

    public function setParameters($parameters){
        $this->parameters = $parameters;
        return $this;
    }

    protected function getParameters($parameters){
        $this->parameters['apiKey'] = $this->apiKey;
        return $this->parameters;
    }

    public function get(){
        return $this->templating->render('SocialNetworkBundle:Buttons:facebook.html.twig', [
            'params' => $this->getParameters()
        ]);
    }
}