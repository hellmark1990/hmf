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
        /**
         * @var User $user
         */
        $user = $options['user'];

        $builder
            ->add('image', 'sonata_media_type', [
                'required' => false,
                'provider' => 'sonata.media.provider.image',
                'context' => 'shelf',
                'attr' => ['class' => 'form-shelf-image'],
                'show_unlink' => false,
                'label' => false
            ])
            ->add('title')
            ->add('pagesCount')
            ->add('access', ChoiceType::class, array(
                'choices' => [
                    'Private' => Shelf::ACCESS_PRIVATE,
                    'Public' => Shelf::ACCESS_PUBLIC,
                    'Shared' => Shelf::ACCESS_SHARED
                ],
                'choices_as_values' => true,
            ))
            ->add('books', EntityType::class, array(
                'class' => 'BookBundle:Book',
                'query_builder' => function (BookRepository $er) use($user){
                    $qb = $er->createQueryBuilder('b');
                    return $qb
                        ->where($qb->expr()->eq('b.user', $user->getId()))
                        ->orderBy('b.id', 'ASC');
                },
                'choice_label' => 'name',
                'multiple' => true,
                'required' => false,
                'attr' => ['class' => 'chosen-select']
            ))
            ->add('description', 'textarea', [
                'required' => false,
            ]);
    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver){
        $resolver->setDefaults(array(
            'data_class' => 'BookBundle\Entity\Shelf',
            'user' => null
        ));
    }

    /**
     * @return string
     */
    public function getName(){
        return 'bookbundle_shelf';
    }
}
