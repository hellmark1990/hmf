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


class UserCreatorApi {
    private $service_container;
    private $em;

    /**
     * Constructor
     *
     * @author    Joe Sexton <joe@webtipblog.com>
     * @param    RouterInterface $router
     * @param    Session $session
     */
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
    public function createUserByEmail($email){
        $usersRepository = $this->em->getRepository("ProfileBundle:User");
        $user = $usersRepository->findOneBy(['email' => $email]);
        if ($user) {
            return $user;
        }

        $userManager = $this->service_container->get('fos_user.user_manager');
        $tokenGenerator = $this->service_container->get('fos_user.util.token_generator');
        $encoder = $this->service_container->get('security.password_encoder');

        $username = explode('@', $email)[0];

        $user = $userManager->createUser();
        $user->setUsername($username);
        $user->setEmail($email);
        $user->setEmailCanonical($email);
        $user->setLocked(0);
        $user->setEnabled(1);

        $plainPassword = substr($tokenGenerator->generateToken(), 0, 12);

        $user->setPlainPassword($plainPassword);
        $user->setPassword($encoder->encodePassword($user, $plainPassword));

        $userManager->updateUser($user);
        return $user;
    }


}