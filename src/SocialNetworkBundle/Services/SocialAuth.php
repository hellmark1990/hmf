<?php
/**
 * Created by PhpStorm.
 * User: mark
 * Date: 28.01.16
 * Time: 1:58
 */

namespace SocialNetworkBundle\Services;

use Application\Sonata\MediaBundle\Entity\Media;
use ProfileBundle\Entity\User;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;


class SocialAuth {

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

    public function __construct($container, $em){
        $this->service_container = $container;
        $this->em = $em;
        $this->translator = $this->service_container->get('translator');
    }

    /**
     * @param $userData
     * @return User
     * @throws \Exception
     */
    public function connect($userData){
        if (!$userData['email']) {
            throw new \Exception('Please, specify your email in social account.');
        }

        /**
         * @var User $user
         */
        $user = $this->em
            ->getRepository('ProfileBundle:User')
            ->findOneBy([
                'email' => $userData['email']
            ]);

        return $user ? $this->signInUser($user) : $this->createUser($userData);
    }

    /**
     * @param $userData
     */
    protected function createUser($userData){
        /** @var $userManager \FOS\UserBundle\Model\UserManagerInterface */
        $userManager = $this->service_container->get('fos_user.user_manager');
        /**
         * @var User $user
         */
        $user = $userManager->createUser();

        $user->setUsername($userData['username']);
        $user->setEmail($userData['email']);

        $tokenGenerator = $this->service_container->get('fos_user.util.token_generator');
        $password = substr($tokenGenerator->generateToken(), 0, 8);
        $user->setPlainPassword($password);
        $user->setPrivateAccess();
        $user->setEnabled(true);

        if (isset($userData['avatar_url'])) {
            $media = new Media();
            $media->setProviderName('sonata.media.provider.image');
            $media->setContext('profile_avatar');
            $user->setAvatar($media);
            $this->service_container
                ->get('app.image_data_saver')
                ->saveFromUrl($userData['avatar_url'], $user->getAvatar());
        }

        $userManager->updateUser($user);
        return $this->signInUser($user);
    }

    protected function signInUser(User $user){
        $token = new UsernamePasswordToken($user, null, "main", $user->getRoles());
        $this->service_container
            ->get("security.token_storage")
            ->setToken($token);

        return $user;
    }
}