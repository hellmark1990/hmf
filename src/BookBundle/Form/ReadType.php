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
            ->add('pagesCount')
            ->add('place', TextType::class, [
                'label' => false
            ])
            ->add('timeStart', TextType::class)
            ->add('timeEnd', TextType::class)
            ->add('comment', TextareaType::class, [
                'required' => false,
                'label' => false
            ])
            ->add('latitude', HiddenType::class)
            ->add('longitude', HiddenType::class)
            ->add('book', EntityHiddenType::class);

        $builder->get('timeStart')
            ->addModelTransformer(new CallbackTransformer(
                function ($date){
                    return $date ? $date->format('Y-m-d H:i:s') : null;
                },
                function ($date){
                    return $date ?  \DateTime::createFromFormat('Y-m-d H:i', $date) : null;
                }
            ));


        $builder->get('timeEnd')
            ->addModelTransformer(new CallbackTransformer(
                function ($date){
                    return $date ? $date->format('Y-m-d H:i:s') : null;
                },
                function ($date){
                    return $date ?  \DateTime::createFromFormat('Y-m-d H:i', $date) : null;
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
