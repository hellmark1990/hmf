<?php

namespace ProfileBundle\EventListener;

use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\Event\FilterResponseEvent;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\DependencyInjection\ContainerInterface;

class RequestListener {
    protected $container;

    public function __construct(ContainerInterface $container) // this is @service_container
    {
        $this->container = $container;
    }

    public function onKernelRequest(GetResponseEvent $event){
        $kernel = $event->getKernel();
        $request = $event->getRequest();
        $container = $this->container;

        if ($request->get('autologin') == 1) {
            $this->container->get('profile.user_auto_login')->login($request);
        }
    }
}