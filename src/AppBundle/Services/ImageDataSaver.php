<?php
namespace AppBundle\Services;

use Application\Sonata\MediaBundle\Entity\Media;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
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


class ImageDataSaver {
    private $service_container;

    /**
     * @var Media
     */
    protected $media;

    /**
     * @var
     */
    protected $pathToTmpFile;

    public function __construct(Container $container){
        $this->service_container = $container;
        $this->pathToTmpFile = $this->service_container->get('kernel')->getRootDir() . '/../web/uploads/tmp_image.jpg';
    }

    public function save($data, Media $media){
        return $this->setImageData($data, $media);
    }

    public function saveFromUrl($url, Media $media){
        $imageContent = file_get_contents($url);
        return $this->saveData($imageContent, $media);
    }

    protected function setImageData($data, Media $media){
        list($type, $data) = explode(';', $data);
        list(, $data) = explode(',', $data);
        return $this->saveData(base64_decode($data), $media);
    }

    protected function saveData($data, Media $media){
        if ($data) {
            file_put_contents($this->pathToTmpFile, $data);
            $media->setBinaryContent($this->pathToTmpFile);
        }
        return $media;
    }

}