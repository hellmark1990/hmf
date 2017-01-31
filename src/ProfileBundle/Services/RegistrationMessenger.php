<?php

namespace ProfileBundle\Services;

use ProfileBundle\Entity\User;
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


class RegistrationMessenger {

    private $service_container;
    private $em;

    /**
     * @var DataCollectorTranslator
     */
    protected $translator;

    public function __construct(Container $container, ObjectManager $manage){
        $this->service_container = $container;
        $this->em = $manage;
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


}