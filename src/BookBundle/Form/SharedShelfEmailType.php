<?php

namespace BookBundle\Form;

use AppBundle\Form\Extension\Type\EntityHiddenType;
use BookBundle\Entity\SharedShelf;
use ProfileBundle\Repository\UserRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;

class SharedShelfEmailType extends AbstractType {

    private $container;
    private $translator;

    public function __construct($container){
        $this->container = $container;
        $this->translator = $this->container->get('translator');
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options){
        $builder
            ->add('type', ChoiceType::class, array(
                'choices' => [
                    'View' => SharedShelf::ACCESS_VIEW,
                    'Edit' => SharedShelf::ACCESS_EDIT,
                ],
                'choices_as_values' => true,
            ))
            ->add('email', TextType::class, [
                'constraints' => [
                    new NotBlank(),
                    new Email(),
                ],
                'attr' => [
                    'placeholder' => $this->translator->trans('Enter shared user email...')
                ]
            ]);

        $builder->add(
            $builder->create('shelf', HiddenType::class)
                ->addModelTransformer($this->container->get('app.form.data_transformer.shelf_to_number_transformer'))
        );

    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver){
    }

    /**
     * @return string
     */
    public function getName(){
        return 'bookbundle_sharedshelf_email';
    }
}
