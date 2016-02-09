<?php

/*
 * This file is part of the FOSUserBundle package.
 *
 * (c) FriendsOfSymfony <http://friendsofsymfony.github.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace ProfileBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class PropositionFormType extends AbstractType
{


    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', null, array('label' => 'Title', 'translation_domain' => 'ProfileBundle'))
            ->add('description', null, array('label' => 'Description', 'translation_domain' => 'ProfileBundle'))
            ->add('image0', 'sonata_media_type', [
                'required' => false,
                'provider' => 'sonata.media.provider.image',
                'context' => 'default',
            ])
            ->add('image1', 'sonata_media_type', [
                'required' => false,
                'provider' => 'sonata.media.provider.image',
                'context' => 'default',
            ])
            ->add('image2', 'sonata_media_type', [
                'required' => false,
                'provider' => 'sonata.media.provider.image',
                'context' => 'default',
            ])
            ->add('image3', 'sonata_media_type', [
                'required' => false,
                'provider' => 'sonata.media.provider.image',
                'context' => 'default',
            ])
            ->add('image4', 'sonata_media_type', [
                'required' => false,
                'provider' => 'sonata.media.provider.image',
                'context' => 'default',
            ])
            ->add('image5', 'sonata_media_type', [
                'required' => false,
                'provider' => 'sonata.media.provider.image',
                'context' => 'default',
            ])
            ->add('save', SubmitType::class, array('label' => 'Save', 'translation_domain' => 'ProfileBundle'));
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'csrf_token_id' => 'proposition',
            'intention' => 'proposition',
        ));
    }

    // BC for SF < 2.7
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $this->configureOptions($resolver);
    }

    // BC for SF < 3.0
    public function getName()
    {
        return $this->getBlockPrefix();
    }

    public function getBlockPrefix()
    {
        return 'profile_proposition';
    }
}
