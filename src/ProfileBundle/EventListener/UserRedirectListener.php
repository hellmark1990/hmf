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
    const SITEMAP = 'seo_sitemap';
    const USERS_LIST = 'users_list';
    const ROBOTS_TXT = 'seo_robots_txt';
    const BOOKS_LIST_PUBLIC_USER = 'book_list_user_public';
    const BOOKS_VIEW_PUBLIC_USER = 'book_public_view';
    const HOMEPAGE = 'homepage';
    const CONNECT_FACEBOOK = 'connect_facebook';
    const CONNECT_FACEBOOK_CHECK = 'connect_facebook_check';
    const CONNECT_GOOGLE = 'connect_google';
    const CONNECT_GOOGLE_CHECK = 'connect_google_check';
    const CONNECT_LINKEDIN = 'connect_linkedin';
    const CONNECT_LINKEDIN_CHECK = 'connect_linkedin_check';
    const CONNECT_GITHUB = 'connect_github';
    const CONNECT_GITHUB_CHECK = 'connect_github_check';

    public function __construct(ContainerInterface $container) // this is @service_container
    {
        $this->container = $container;
    }

    public function onKernelRequest(GetResponseEvent $event){
        if (HttpKernel::MASTER_REQUEST != $event->getRequestType()) {
            return;
        }

        $user = $this->container->get('security.token_storage')->getToken()->getUser();

        if ($user === 'anon.' && !in_array($event->getRequest()->get('_route'), [
                self::LOGIN_ROUTE,
                self::REGISTRATION_ROUTE,
                self::LOGIN_API_ROUTE,
                self::FORGOT_PASSWORD_ROUTE,
                self::FORGOT_PASSWORD_SEND_EMAIL_ROUTE,
                self::RESET_PASSWORD_ROUTE,
                self::FIND_NAME_ROUTE,
                self::SITEMAP,
                self::USERS_LIST,
                self::ROBOTS_TXT,
                self::BOOKS_LIST_PUBLIC_USER,
                self::BOOKS_VIEW_PUBLIC_USER,
                self::HOMEPAGE,
                self::CONNECT_FACEBOOK,
                self::CONNECT_FACEBOOK_CHECK,
                self::CONNECT_GOOGLE,
                self::CONNECT_GOOGLE_CHECK,
                self::CONNECT_LINKEDIN,
                self::CONNECT_LINKEDIN_CHECK,
                self::CONNECT_GITHUB,
                self::CONNECT_GITHUB_CHECK,
            ])
            && $event->getRequest()->get('autologin') != 1
        ) {
            $response = new RedirectResponse($this->container->get('router')->generate(self::LOGIN_ROUTE));
            $event->setResponse($response);
        }
    }
}