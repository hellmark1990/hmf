<?php

namespace ProfileBundle\Controller;

use Application\Sonata\MediaBundle\Entity\Media;
use ProfileBundle\Entity\Proposition;
use ProfileBundle\Form\Type\PropositionFormType;
use ProfileBundle\Form\Type\PropositionImageFormType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class PropositionController
 * @package ProfileBundle\Controller
 * @Route("/proposition")
 */
class PropositionController extends Controller
{
    /**
     * @Route("/create")
     */
    public function createAction(Request $request)
    {
        $proposition = new Proposition();

        $form = $this->createForm(PropositionFormType::class, $proposition);

        $form->setData($proposition);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $proposition->setUser($this->getUser());
            $this->getDoctrine()->getEntityManager()->persist($proposition);
            $this->getDoctrine()->getEntityManager()->flush();

            $images = $request->files->get('profile_proposition');
            foreach ($images as $key => $image) {
                if ($image['binaryContent'] === null) {
                    continue;
                }

                $em = $this->getDoctrine()->getManager();

                $media = new Media();
                $media->setBinaryContent($image['binaryContent']);
                $media->setContext('default');
                $media->setProviderName('sonata.media.provider.image');
                $em->persist($media);
                $em->flush();

                $proposition->addMedia($media);

                $this->getDoctrine()->getEntityManager()->persist($proposition);
                $this->getDoctrine()->getEntityManager()->flush();
            }

        }

        return $this->render('ProfileBundle:Proposition:create.html.twig',
            [
                'form' => $form->createView(),
            ]
        );
    }
}
