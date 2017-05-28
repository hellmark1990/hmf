<?php
namespace ProfileBundle\Services;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\SecurityContextInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationFailureHandlerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface as Container;

class AuthenticationHandler implements AuthenticationSuccessHandlerInterface, AuthenticationFailureHandlerInterface {
    private $router;
    private $session;
    private $service_container;

    /**
     * Constructor
     *
     * @author    Joe Sexton <joe@webtipblog.com>
     * @param    RouterInterface $router
     * @param    Session $session
     */
    public function __construct(RouterInterface $router, Session $session, Container $container){
        $this->router = $router;
        $this->session = $session;
        $this->service_container = $container;
    }

    /**
     * onAuthenticationSuccess
     *
     * @author    Joe Sexton <joe@webtipblog.com>
     * @param    Request $request
     * @param    TokenInterface $token
     * @return    Response
     */
    public function onAuthenticationSuccess(Request $request, TokenInterface $token){
        $userCurrent = $this->service_container->get('security.token_storage')->getToken()->getUser();


        // if AJAX login
        if ($request->isXmlHttpRequest()) {
            $referer = ($url = $this->session->get('_security.main.target_path')) ? $url : $this->router->generate('fos_user_profile_show', array('name' => $this->service_container->get('security.token_storage')->getToken()->getUser()->getUserName()));

            $array = array('success' => true, 'referer' => $referer); // data to return via JSON
            $response = new Response(json_encode($array));
            $response->headers->set('Content-Type', 'application/json');

            return $response;

            // if form login
        } else {

            if ($this->session->get('_security.main.target_path')) {

                $url = $this->session->get('_security.main.target_path');

            } else {

                $url = $this->router->generate('fos_user_profile_show', ['name' => $userCurrent->getUsername()]);

            } // end if

            return new RedirectResponse($url);

        }
    }

    /**
     * onAuthenticationFailure
     *
     * @author    Joe Sexton <joe@webtipblog.com>
     * @param    Request $request
     * @param    AuthenticationException $exception
     * @return    Response
     */
    public function onAuthenticationFailure(Request $request, AuthenticationException $exception){
        // if AJAX login
        if ($request->isXmlHttpRequest()) {

            $array = array('success' => false, 'message' => $exception->getMessage()); // data to return via JSON

            if (strstr($exception->getMessage(), 'timed out')) {
                $array['csrf_token'] = $this->service_container->get('security.csrf.token_manager')->getToken('authenticate')->getValue();
            }

            $response = new Response(json_encode($array));
            $response->headers->set('Content-Type', 'application/json');

            return $response;

            // if form login
        } else {

            // set authentication exception to session
            $request->getSession()->set(SecurityContextInterface::AUTHENTICATION_ERROR, $exception);

            return new RedirectResponse($this->router->generate('fos_user_security_login'));
        }
    }
}