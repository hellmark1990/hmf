<?php
/**
 * Created by PhpStorm.
 * User: mark
 * Date: 28.01.16
 * Time: 1:58
 */

namespace BookBundle\Services;

use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\DependencyInjection\ContainerInterface;


class GoogleSearch
{

    /**
     * @var ContainerInterface
     */
    protected $service_container;

    /**
     * @var \Google_Service_Books
     */
    protected $searcher;

    /**
     * @var \Google_Client
     */
    protected $client;

    public function __construct(ContainerInterface $container, $api_key, $project_name)
    {
        $this->service_container = $container;
        $this->client = new \Google_Client();
        $this->client->setApplicationName($project_name);
        $this->client->setDeveloperKey($api_key);
        $this->searcher = new \Google_Service_Books($this->client);
    }

    public function search($title)
    {
        $results = $this->searcher->volumes->listVolumes($title);
        return $results;
    }


}