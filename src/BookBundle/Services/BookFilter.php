<?php
/**
 * Created by PhpStorm.
 * User: mark
 * Date: 28.01.16
 * Time: 1:58
 */

namespace BookBundle\Services;

use ProfileBundle\Entity\User;
use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\DependencyInjection\ContainerInterface;


class BookFilter {

    /**
     * @var ContainerInterface
     */
    protected $service_container;

    /**
     * @var DataCollectorTranslator
     */
    protected $translator;

    /**
     * @var User
     */
    protected $user;


    public function __construct(ContainerInterface $container){
        $this->service_container = $container;
        $this->translator = $this->service_container->get('translator');
        $this->user = $this->service_container->get('security.context')->getToken();
        $this->user = $this->user ? $this->user->getUser() : null;
    }

    public function getOptions(){
        if (!$this->user) {
            return [];
        }

        return [
            'sort' => [
                'date' => $this->translator->trans('Created'),
                'name' => $this->translator->trans('Title'),
                'author' => $this->translator->trans('Author'),
                'pageCount' => $this->translator->trans('Pages count'),
                'readPageCount' => $this->translator->trans('Read pages count')
            ],
            'sort_directions' => [
                'asc' => $this->translator->trans('Ascending'),
                'desc' => $this->translator->trans('Descending'),
            ],
            'filter' => [
                'shelves' => $this->user ? $this->user->getShelfs() : [],
                'name' => $this->user->getBooks(),
                'author' => $this->user->getBooks(),
                'locations' => $this->user->getBooksReads(),
            ]
        ];
    }

    public function filter(){

    }


}