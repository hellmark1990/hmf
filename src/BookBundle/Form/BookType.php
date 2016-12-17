<?php

namespace BookBundle\Form;

use Sonata\AdminBundle\Form\Type\ModelHiddenType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class BookType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('image', 'sonata_media_type', [
                'required' => false,
                'provider' => 'sonata.media.provider.image',
                'context' => 'default',
                'attr' => ['class' => 'form-book-image'],
                'show_unlink' => false,
                'label' => false
            ])
            ->add('name')
            ->add('description', 'textarea',[
                'attr' => ['rows' => 11]
            ])
            ->add('publishedDate', DateType::class, array(
                'widget' => 'single_text',
                'html5' => false,
                'attr' => ['class' => 'js-datepicker-publishedDate'],
            ))

            ->add('pageCount')
            ->add('language')
            ->add('publisher')
            ->add('readerLink')
            ->add('printedPageCount', HiddenType::class)
            ->add('imageUrl', HiddenType::class)
            ->add('previewLink', HiddenType::class)

        ;

    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'BookBundle\Entity\Book'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'bookbundle_book';
    }
}
