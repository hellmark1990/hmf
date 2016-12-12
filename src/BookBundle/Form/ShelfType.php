<?php

namespace BookBundle\Form;

use BookBundle\Entity\Book;
use BookBundle\Entity\BookRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use BookBundle\Entity\Shelf;

class ShelfType extends AbstractType {
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options){
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
            ->add('books', EntityType::class, array(
                'class' => 'BookBundle:Book',
                'query_builder' => function (BookRepository $er){
                    return $er->createQueryBuilder('b')
                        ->orderBy('b.id', 'ASC');
                },
                'choice_label' => 'name',
            ));
    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver){
        $resolver->setDefaults(array(
            'data_class' => 'BookBundle\Entity\Shelf'
        ));
    }

    /**
     * @return string
     */
    public function getName(){
        return 'bookbundle_shelf';
    }
}
