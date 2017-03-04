<?php
/**
 * Created by PhpStorm.
 * User: mark
 * Date: 28.01.16
 * Time: 1:58
 */

namespace App\SeoBundle\Services;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\Templating\Helper\Helper;


class SeoManager {

    const DEFAULT_ROUTE_NAME = 'homepage';

    /**
     * @var ContainerInterface
     */
    protected $container;

    /**
     * @var
     */
    protected $em;

    /**
     * @var
     */
    protected $seo_repository;

    public function __construct(ContainerInterface $container, $em){
        $this->container = $container;
        $this->em = $em;
        $this->seo_repository = $this->em->getRepository('AppSeoBundle:SeoItem');
    }

    public function getAll(){
        $request = $this->container->get('request');
        $routeName = $request->get('_route');

        $seoItem = $this->seo_repository->findOneBy(['routeName' => $routeName]);

        if (!$seoItem) {
            $seoItem = $this->seo_repository->findOneBy(['routeName' => self::DEFAULT_ROUTE_NAME]);
        }

        echo '
                <title>' . $seoItem->getTitle() . '</title>
                <meta name="author" content="">
                <meta name="title" content="' . $seoItem->getTitle() . '">
                <meta name="description" content="' . $seoItem->getMetaDescription() . '">
                <meta name="keywords" content="' . $seoItem->getMetaKeywords() . '">
            ';

    }
}