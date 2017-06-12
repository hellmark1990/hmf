<?php

namespace SocialNetworkBundle\DependencyInjection;

use SocialNetworkBundle\Services\SocialButtons;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\DependencyInjection\Reference;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\Loader;
use Symfony\Component\Yaml\Yaml;

/**
 * This is the class that loads and manages your bundle configuration
 *
 * To learn more see {@link http://symfony.com/doc/current/cookbook/bundles/extension.html}
 */
class SocialNetworkExtension extends Extension {

    /**
     * Main configs
     * @var array
     */
    private $mainConfig = [];

    /**
     * {@inheritDoc}
     */
    public function load(array $configs, ContainerBuilder $container){
        $loader = new Loader\YamlFileLoader($container, new FileLocator(__DIR__ . '/../Resources/config'));
        $loader->load('services.yml');

        $this->processConfiguration(new Configuration(), $configs);

        $this->loadMainConfig();
        $this->loadServices($container, array_pop($configs));
    }

    public function loadMainConfig(){
        $configFile = __DIR__ . '/../Resources/config/config.yml';
        if (file_exists($configFile)) {
            $mainConfigs = Yaml::parse(file_get_contents($configFile));
            $this->mainConfig = $mainConfigs ? $mainConfigs : [];
        }
    }

    public function loadServices(ContainerBuilder $container, $configs = []){
        if (!isset($this->mainConfig['services'])) {
            return;
        }

        foreach ($this->mainConfig['services'] as $serviceId => $service) {
            $def = new Definition();
            $def->setClass($service['class']);
            $def->setProperty('configs', $configs);

            if (isset($service['arguments'])) {
                foreach ($service['arguments'] as $argument) {
                    if (strstr($argument, '@') !== FALSE) {
                        $argument = str_replace('@', '', $argument);
                        $def->addArgument(new Reference($argument));
                        continue;
                    }
                    $def->addArgument($argument);
                }
            }

            $container->setDefinition($serviceId, $def);
        }
    }
}
