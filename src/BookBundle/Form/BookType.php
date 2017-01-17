<?php

namespace BookBundle\Form;

use BookBundle\Entity\ShelfRepository;
use Sonata\AdminBundle\Form\Type\ModelHiddenType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class BookType extends AbstractType {
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options){
        $builder
            ->add('image', 'sonata_media_type', [
                'required' => false,
                'provider' => 'sonata.media.provider.image',
                'context' => 'book',
                'attr' => ['class' => 'form-book-image'],
                'show_unlink' => false,
                'label' => false
            ])
            ->add('name', 'text', [
                'required' => false
            ])
            ->add('authors', 'text', [
                'required' => false
            ])
            ->add('publisher', 'text', [
                'required' => false
            ])
            ->add('shelfs', EntityType::class, array(
                'class' => 'BookBundle:Shelf',
                'query_builder' => function (ShelfRepository $er){
                    return $er->createQueryBuilder('s')
                        ->orderBy('s.title', 'ASC');
                },
                'choice_label' => 'title',
                'multiple' => true,
                'required' => false
            ))
            ->add('publishedDate', DateType::class, array(
                'widget' => 'single_text',
                'html5' => false,
                'attr' => ['class' => 'js-datepicker-publishedDate'],
                'required' => false,
            ))
            ->add('pageCount', 'text', [
                'required' => false
            ])
            ->add('language', 'text', [
                'required' => false,
            ])
            ->add('readerLink', 'text', [
                'required' => false
            ])
            ->add('printedPageCount', HiddenType::class)
            ->add('imageUrl', HiddenType::class)
            ->add('previewLink', 'text', [
                'required' => false
            ])
            ->add('description', 'textarea', [
                'attr' => ['rows' => 11],
                'required' => false
            ]);

    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver){
        $resolver->setDefaults(array(
            'data_class' => 'BookBundle\Entity\Book'
        ));
    }

    /**
     * @return string
     */
    public function getName(){
        return 'bookbundle_book';
    }
}
