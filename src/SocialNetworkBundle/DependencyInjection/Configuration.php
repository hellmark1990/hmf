<?php

namespace SocialNetworkBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class Configuration implements ConfigurationInterface {
    public function getConfigTreeBuilder(){
        $treeBuilder = new TreeBuilder();
        $rootNode = $treeBuilder->root('social_network');

        $rootNode
            ->children()
                ->arrayNode('socials')
                    ->children()
                        ->arrayNode('facebook')
                            ->children()
                                ->integerNode('app_id')->end()
                            ->end()
                        ->end() // facebook
                        ->arrayNode('twitter')
                        ->end() // twitter
                        ->arrayNode('vk')
                        ->end() // vk
                    ->end()
                ->end()
            ->end();

        return $treeBuilder;
    }
}