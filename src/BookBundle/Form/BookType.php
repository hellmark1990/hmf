<?php

namespace BookBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
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
            ->add('name')
            ->add('publisher')
            ->add('publishedDate', DateType::class, array(
                'widget' => 'single_text',
                // do not render as type="date", to avoid HTML5 date pickers
                'html5' => false,
                // add a class that can eb selected in JavaScript
                'attr' => ['class' => 'js-datepicker-publishedDate'],
            ))
            ->add('description')
            ->add('pageCount')
            ->add('printedPageCount')
            ->add('imageUrl')
            ->add('language')
            ->add('previewLink')
            ->add('readerLink')
            ->add('image', 'sonata_media_type', [
                'required' => false,
                'provider' => 'sonata.media.provider.image',
                'context' => 'default',
                'attr' => ['class' => 'form-book-image'],
            ]);


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
