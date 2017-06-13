<?php
namespace AppBundle\Services;

use Application\Sonata\MediaBundle\Entity\Media;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
//use Symfony\Component\Locale\Locale;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\SecurityContextInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationFailureHandlerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface as Container;
use Doctrine\Common\Persistence\ObjectManager;


class Langauges {

    public function __construct(){
    }

    public function getLocaleByLanguage($language){
        $locales = \Locale::getLocales();
        foreach ($locales as $locale) {
            $languages = \Locale::getDisplayLanguages($locale);
            $localeSearched = array_search($language, $languages);
            if ($localeSearched) {
                return $localeSearched;
            }

            $localeSearched = array_search(mb_strtolower($language), $languages);
            if ($localeSearched) {
                return $localeSearched;
            }
        }

        return 'en';
    }

    public function getLanguageByLocale($locale){
        return ucfirst(\Locale::getDisplayLanguage($locale));
    }


}