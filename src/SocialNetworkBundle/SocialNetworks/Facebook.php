<?php

namespace SocialNetworkBundle\SocialNetworks;

/**
 * Created by PhpStorm.
 * User: mark
 * Date: 30.05.17
 * Time: 22:20
 */
class Facebook {
    const URL = 'https://facebook.com/sharer/sharer.php';

    /**
     * Share parameters
     * @var
     */
    protected $params;

    public function __construct($params){
//        $this->prepareParams($params);
    }

    protected function prepareParams($params){
    }

    public function getData(){

    }
}