<?php

namespace SocialNetworkBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/social")
     */
    public function indexAction()
    {
        return $this->render('SocialNetworkBundle:Default:index.html.twig');
    }
}
