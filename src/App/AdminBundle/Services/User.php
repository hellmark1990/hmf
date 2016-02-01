<?php
/**
 * Created by PhpStorm.
 * User: mark
 * Date: 28.01.16
 * Time: 1:58
 */

namespace App\AdminBundle\Services;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Security\Core\Validator\Constraints\UserPassword;

class User extends Admin
{

    public $baseRouteName = 'asd';
    public $baseRoutePattern = 'asd';


    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('username', 'text')
            ->add('email', 'text')
            ->add('password', 'text')
            ->add('phone', 'text')
            ->add('about', 'text')
            ->add('vk', 'text')
            ->add('facebook', 'text')
            ->add('twitter', 'text');
    }

    public function preUpdate($user)
    {
        /**
         * @var \ProfileBundle\Entity\User $user
         */
        $user->setPlainPassword($user->getPassword());
    }


    public function prePersist($user)
    {
        /**
         * @var \ProfileBundle\Entity\User $user
         */
        $user->setPlainPassword($user->getPassword());
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper->add('username')->add('email')->add('phone');
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper->addIdentifier('username')->add('email')->add('phone');
    }
}