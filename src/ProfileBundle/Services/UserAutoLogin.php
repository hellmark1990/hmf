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
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Http\Event\InteractiveLoginEvent;


class UserAutoLogin {
    private $service_container;
    private $em;

    public function __construct(Container $container, ObjectManager $manage){
        $this->service_container = $container;
        $this->em = $manage;
    }


    /**
     * Create user by email
     *
     * @param $email -user email
     * @return object
     */
    public function login($request){
        $usersRepository = $this->em->getRepository("ProfileBundle:User");
        $user = $usersRepository->findOneBy(['salt' => $request->get('salt')]);

        if (!$user) {
            return null;
        }

        // Here, "public" is the name of the firewall in your security.yml
        $token = new UsernamePasswordToken($user, $user->getPassword(), "public", $user->getRoles());
        $this->service_container->get("security.token_storage")->setToken($token);

        // Fire the login event
        $event = new InteractiveLoginEvent($request, $token);
        $this->service_container->get("event_dispatcher")->dispatch("security.interactive_login", $event);

    }


}