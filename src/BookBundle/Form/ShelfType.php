<?php

namespace BookBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use BookBundle\Entity\Shelf;

class ShelfType extends AbstractType
{
        /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title')
            ->add('description')
            ->add('access', ChoiceType::class, array(
                'choices' => [
                    'Private' => Shelf::ACCESS_PRIVATE,
                    'Public' => Shelf::ACCESS_PUBLIC,
                    'Shared' => Shelf::ACCESS_SHARED
                    ],                
                'choices_as_values' => true,
            ))
            ->add('deleted')
            ->add('books')
        ;
    }
    
    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'BookBundle\Entity\Shelf'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'bookbundle_shelf';
    }
}
