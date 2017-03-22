<?php

namespace ProfileBundle\EventListener;

use Symfony\Component\DependencyInjection\ContainerAwareTrait;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\HttpKernel;
use Symfony\Component\DependencyInjection\ContainerAware;

class UserRedirectListener {
    protected $container;
    const LOGIN_ROUTE = 'fos_user_security_login';
    const REGISTRATION_ROUTE = 'fos_user_registration_register';
    const LOGIN_API_ROUTE = 'fos_user_security_check';
    const FORGOT_PASSWORD_ROUTE = 'fos_user_resetting_request';
    const FORGOT_PASSWORD_SEND_EMAIL_ROUTE = 'fos_user_resetting_send_email';
    const RESET_PASSWORD_ROUTE = 'fos_user_resetting_reset';
    const FIND_NAME_ROUTE = 'fn';

    public function __construct(ContainerInterface $container) // this is @service_container
    {
        $this->container = $container;
    }

    public function onKernelRequest(GetResponseEvent $event){
        if (HttpKernel::MASTER_REQUEST != $event->getRequestType()) {
            return;
        }

        $user = $this->container->get('security.context')->getToken()->getUser();

        if ($user === 'anon.' && !in_array($event->getRequest()->get('_route'), [
                self::LOGIN_ROUTE,
                self::REGISTRATION_ROUTE,
                self::LOGIN_API_ROUTE,
                self::FORGOT_PASSWORD_ROUTE,
                self::FORGOT_PASSWORD_SEND_EMAIL_ROUTE,
                self::RESET_PASSWORD_ROUTE,
                self::FIND_NAME_ROUTE,
            ])
            && $event->getRequest()->get('autologin') != 1
        ) {
            $response = new RedirectResponse($this->container->get('router')->generate(self::LOGIN_ROUTE));
            $event->setResponse($response);
        }
    }
}