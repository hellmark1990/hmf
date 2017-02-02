<?php

namespace ProfileBundle\Services;

use ProfileBundle\Entity\User;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\SecurityContextInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface as Container;
use Doctrine\Common\Persistence\ObjectManager;


class ProfileMessenger {

    private $service_container;
    private $em;

    /**
     * @var DataCollectorTranslator
     */
    protected $translator;

    protected $router;

    public function __construct(Container $container, ObjectManager $manage, UrlGeneratorInterface $router){
        $this->service_container = $container;
        $this->em = $manage;
        $this->router = $router;
        $this->translator = $this->service_container->get('translator');
    }

    public function sendEmail(User $user){
        $message = \Swift_Message::newInstance()
            ->setSubject($this->translator->trans('Registration'))
            ->setFrom($this->service_container->getParameter('my_email'))
            ->setTo($user->getEmail())
            ->setBody(
                $this->service_container
                    ->get('templating')
                    ->render(
                        'ProfileBundle:Registration:mails\registration_email.html.twig',
                        [
                            'user' => $user
                        ]
                    ),
                'text/html'
            );

        /**
         * @var $mailer \Swift_Mailer
         */
        $mailer = $this->service_container->get('mailer');
        return $mailer->send($message);
    }

    public function sendResettingEmail(User $user){
        $url = $this->router->generate('fos_user_resetting_reset', array(
            'token' => $user->getConfirmationToken()
        ), UrlGeneratorInterface::ABSOLUTE_URL);

        $message = \Swift_Message::newInstance()
            ->setSubject($this->translator->trans('Reset Password'))
            ->setFrom($this->service_container->getParameter('my_email'))
            ->setTo($user->getEmail())
            ->setBody(
                $this->service_container
                    ->get('templating')
                    ->render(
                        'ProfileBundle:Resetting:mails\resetting_email.html.twig',
                        [
                            'user' => $user,
                            'confirmationUrl' => $url
                        ]
                    ),
                'text/html'
            );

        /**
         * @var $mailer \Swift_Mailer
         */
        $mailer = $this->service_container->get('mailer');
        return $mailer->send($message);
    }


}