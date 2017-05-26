<?php

namespace App\SeoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class DefaultController extends Controller {

    /**
     * @Route("/sitemap.xml", name="seo_sitemap")
     */
    public function sitemapAction(){

        $urls = [
            'homepage',
            'users_list',
            'fos_user_security_login',
            'fos_user_registration_register',
            'fos_user_security_check',
            'fos_user_resetting_request',
            'fos_user_resetting_send_email',
        ];

        $sitemap = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

        foreach ($urls as $url) {
            $sitemap .=
                '<url >
                  <loc > ' . $this->generateUrl($url, [], UrlGeneratorInterface::ABSOLUTE_URL) . ' </loc >
                  <lastmod > ' . date('Y-m-d') . ' </lastmod >
                  <changefreq >weekly</changefreq >
                  <priority >0.8</priority >
                </url >';
        }

        $sitemap .= '</urlset>';

        $response = new Response($sitemap);
        $response->headers->set('Content-Type', 'xml');

        return $response;
    }

    /**
     * @Route("/robots.txt", name="seo_robots_txt")
     */
    public function robotsAction(){
        $robots = 'User-agent: * ' . PHP_EOL . 'Disallow: ' . PHP_EOL . 'Sitemap: ' . $this->generateUrl('seo_sitemap') . PHP_EOL;
        $response = new Response($robots);
        $response->headers->set('Content-Type', 'text/plain');
        return $response;
    }
}
