<?php

namespace ProfileBundle\EventListener;

use ProfileBundle\Entity\User;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\Event\FilterResponseEvent;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Doctrine\ORM\Event\LifecycleEventArgs;

class PostPersistListener {

    protected $container;

    public function __construct(ContainerInterface $container) // this is @service_container
    {
        $this->container = $container;
    }

    public function postPersist(LifecycleEventArgs $args){
        $entity = $args->getEntity();

        // only act on some "Product" entity
        if ($entity instanceof User) {
            $this->container->get('profile.registration_messenger')->sendEmail($entity);
            return;
        }

        return;
    }
}