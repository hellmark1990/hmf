<?php

namespace BookBundle\Form;

use BookBundle\Entity\BookRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class ReadType extends AbstractType {
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options){
        $builder
            ->add('title')
            ->add('comment')
            ->add('place')
            ->add('latitude')
            ->add('longitude')
            ->add('timeStart')
            ->add('timeEnd')
            ->add('book', EntityType::class, array(
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
            'data_class' => 'BookBundle\Entity\Read'
        ));
    }

    /**
     * @return string
     */
    public function getName(){
        return 'bookbundle_read';
    }
}
