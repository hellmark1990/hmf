<?php

namespace BookBundle\Form;

use AppBundle\Form\Extension\Type\EntityHiddenType;
use BookBundle\Entity\BookRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
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
            ->add('place', TextType::class)
            ->add('timeStart', TextType::class)
            ->add('timeEnd', TextType::class)
            ->add('comment', TextareaType::class, [
                'required' => false
            ])
            ->add('latitude', HiddenType::class)
            ->add('longitude', HiddenType::class)
            ->add('book', EntityHiddenType::class);

        $builder->get('timeStart')
            ->addModelTransformer(new CallbackTransformer(
                function ($date){
                    // transform the array to a string
                    return $date->format('Y-m-d H:i:s');
                },
                function ($date){
                    return \DateTime::createFromFormat('Y-m-d H:i', $date);
                }
            ));


        $builder->get('timeEnd')
            ->addModelTransformer(new CallbackTransformer(
                function ($date){
                    // transform the array to a string
                    return $date->format('Y-m-d H:i:s');
                },
                function ($date){
                    return \DateTime::createFromFormat('Y-m-d H:i', $date);
                }
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
