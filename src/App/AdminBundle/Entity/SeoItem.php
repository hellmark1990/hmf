<?php

namespace App\AdminBundle\Entity;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;

class SeoItem extends Admin {
    protected $baseRouteName = 'seo-item';
    protected $baseRoutePattern = 'seo-item';
    protected $container;

    public function __construct($code, $class, $baseControllerName, $container){
        parent::__construct($code, $class, $baseControllerName);
        $this->container = $container;
    }

    protected function configureFormFields(FormMapper $formMapper){
        $router = $this->container->get('router');
        $collection = $router->getRouteCollection();
        $allRoutes = $collection->all();

        $routes = [];
        foreach($allRoutes as $routeName => $route){
            if(strpos($routeName, '_') !== 0 && !strstr($routeName, 'admin')){
                $routes[$routeName] = $routeName;
            }
        }

        $formMapper->add('route_name', 'choice',
            array(
                'choices' => $routes,
                'choices_as_values' => true,
            )
        );

        $formMapper->add('title', 'text');
        $formMapper->add('meta_description', 'text');
        $formMapper->add('meta_keywords', 'textarea');
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper){
        $datagridMapper->add('routeName');
        $datagridMapper->add('title');
        $datagridMapper->add('metaDescription');
        $datagridMapper->add('metaKeywords');
    }

    protected function configureListFields(ListMapper $listMapper){
        $listMapper->addIdentifier('route_name');
        $listMapper->addIdentifier('title');
        $listMapper->addIdentifier('meta_description');
    }
}
