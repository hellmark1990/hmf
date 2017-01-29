<?php
/**
 * Created by PhpStorm.
 * User: mark
 * Date: 28.01.16
 * Time: 1:58
 */

namespace BookBundle\Services;

use BookBundle\Entity\SharedShelf;
use Hip\MandrillBundle\Message;
use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\Translation\DataCollectorTranslator;


class SharedShelfMessenger {

    /**
     * @var ContainerInterface
     */
    protected $service_container;

    /**
     * @var DataCollectorTranslator
     */
    protected $translator;

    public function __construct(ContainerInterface $container){
        $this->service_container = $container;
        $this->translator = $this->service_container->get('translator');
    }

    public function sendSharedEmail(SharedShelf $shareShelf){
        $message = \Swift_Message::newInstance()
            ->setSubject($this->translator->trans('New books shelf share to you'))
            ->setFrom($this->service_container->getParameter('my_email'))
            ->setTo($shareShelf->getUserToShare()->getEmail())
            ->setBody(
                $this->service_container->get('templating')->render(
                    'BookBundle:SharedShelf:mails\share_user_by_email.html.twig',
                    [
                        'shareShelf' => $shareShelf
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