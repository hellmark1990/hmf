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

use FOS\UserBundle\Util\LegacyFormHelper;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Symfony\Component\Security\Core\Validator\Constraints\UserPassword;

class ProfileFormType extends AbstractType {
    private $class;

    /**
     * @param string $class The User class name
     */
    public function __construct($class){
        $this->class = $class;
    }

    public function buildForm(FormBuilderInterface $builder, array $options){
        $this->buildUserForm($builder, $options);
    }

    public function configureOptions(OptionsResolver $resolver){
        $resolver->setDefaults(array(
            'data_class' => $this->class,
            'csrf_token_id' => 'profile',
            // BC for SF < 2.8
            'intention' => 'profile',
        ));
    }

    // BC for SF < 2.7
    public function setDefaultOptions(OptionsResolverInterface $resolver){
        $this->configureOptions($resolver);
    }

    // BC for SF < 3.0
    public function getName(){
        return $this->getBlockPrefix();
    }

    public function getBlockPrefix(){
        return 'fos_user_profile';
    }

    /**
     * Builds the embedded form representing the user.
     *
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    protected function buildUserForm(FormBuilderInterface $builder, array $options){
        $builder
            ->add('avatar', 'sonata_media_type', [
                'required' => false,
                'provider' => 'sonata.media.provider.image',
                'context' => 'profile_avatar',
                'label' => false,
                'show_unlink' => false,
            ])
            ->add('username', null, array('label' => 'form.username', 'translation_domain' => 'FOSUserBundle'))
            ->add('email', \FOS\UserBundle\Util\LegacyFormHelper::getType('Symfony\Component\Form\Extension\Core\Type\EmailType'), array('label' => 'form.email', 'translation_domain' => 'FOSUserBundle'))
            ->add('about', 'textarea', ['required' => false, 'label' => false,])
            ->add('phone', 'text', ['required' => false])
            ->add('vk', 'text', ['required' => false, 'label' => 'VKontakte'])
            ->add('facebook', 'text', ['required' => false, 'label' => 'Facebook'])
            ->add('accessType', HiddenType::class)
            ->add('twitter', 'text', ['required' => false, 'label' => 'Instagram']);
    }
}
