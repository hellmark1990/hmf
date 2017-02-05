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


class FileValidate {
    private $service_container;

    protected $maxSize;
    protected $mimeTypes;
    protected $fieldName;

    protected $message = '';

    /**
     * @var Media
     */
    protected $media;

    public function __construct(Container $container){
        $this->service_container = $container;
    }

    protected function setMessage($message){
        $this->message = $message;
    }

    public function getMessage(){
        return $this->message;
    }

    protected function setRules(array $rules = []){
        $this->maxSize = isset($rules['maxSize']) ? $rules['maxSize'] : 0;
        $this->mimeTypes = isset($rules['mimeTypes']) ? $rules['mimeTypes'] : '';
        $this->fieldName = isset($rules['fieldName']) ? ucfirst($rules['fieldName']) : 'Field';
    }

    public function validate(Media $media, array $rules = []){
        $this->media = $media;
        $this->setRules($rules);

        try {
            $this->validateMaxSize();
            $this->validateMimeTypes();
        } catch (\Exception $e) {
            $this->setMessage($e->getMessage());
            return false;
        }
        return true;
    }

    public function validateMimeTypes(){
        if (!in_array($this->media->getContentType(), $this->mimeTypes)) {
            throw new \Exception(sprintf('You can upload file only of such types "%s"', implode(', ', $this->mimeTypes)));
        }
    }

    public function validateMaxSize(){
        if ($this->media->getSize() > $this->getNormalizedMaxSize()) {
            throw new \Exception(sprintf($this->fieldName . ' size can not be more than "%s"', $this->maxSize));
        }
    }

    protected function getNormalizedMaxSize(){
        if (ctype_digit((string)$this->maxSize)) {
            return (int)$this->maxSize;
        } elseif (preg_match('/^\d++k$/i', $this->maxSize)) {
            return $this->maxSize * 1000;
        } elseif (preg_match('/^\d++M$/i', $this->maxSize)) {
            return $this->maxSize * 1000000;
        } elseif (preg_match('/^\d++Ki$/i', $this->maxSize)) {
            return $this->maxSize << 10;
        } elseif (preg_match('/^\d++Mi$/i', $this->maxSize)) {
            return $this->maxSize << 20;
        } else {
            throw new ConstraintDefinitionException(sprintf('"%s" is not a valid maximum size', $this->maxSize));
        }
    }


}