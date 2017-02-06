<?php

namespace BookBundle\Form;

use BookBundle\Entity\ShelfRepository;
use ProfileBundle\Entity\User;
use Sonata\AdminBundle\Form\Type\ModelHiddenType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Locale\Locale;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\Validator\Constraints\CallbackValidator;
use Symfony\Component\Validator\Constraints\File;

class BookType extends AbstractType {

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options){
        $container = $options['container'];
        /**
         * @var User $user
         */
        $user = $options['user'];

        $builder
            ->add('image', 'sonata_media_type', [
                'required' => false,
                'provider' => 'sonata.media.provider.image',
                'context' => 'book',
                'attr' => ['class' => 'form-book-image'],
                'show_unlink' => false,
                'label' => false,
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
                'query_builder' => function (ShelfRepository $er) use ($user){
                    $qb = $er->createQueryBuilder('s');
                    return $qb
                        ->where($qb->expr()->eq('s.user', $user->getId()))
                        ->orderBy('s.title', 'ASC');
                },
                'choice_label' => 'title',
                'multiple' => true,
                'required' => false,
                'attr' => ['class' => 'chosen-select']
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

        $builder->get('language')
            ->addModelTransformer(new CallbackTransformer(
                function ($locale) use ($container){
                    return $container->get('app.languages')->getLanguageByLocale($locale);
                },
                function ($language) use ($container){
                    $locales = Locale::getLocales();
                    if (array_search($language, $locales)) {
                        return $language;
                    }
                    return $container->get('app.languages')->getLocaleByLanguage($language);
                }
            ));

    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver){
        $resolver->setDefaults(array(
            'data_class' => 'BookBundle\Entity\Book',
            'user' => null,
            'container' => null,
        ));
    }

    /**
     * @return string
     */
    public function getName(){
        return 'bookbundle_book';
    }
}
