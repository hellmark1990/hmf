<?php

namespace BookBundle\Form;

use AppBundle\Form\Extension\Type\EntityHiddenType;
use BookBundle\Entity\SharedShelf;
use ProfileBundle\Repository\UserRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Symfony\Component\Validator\Constraints\NotBlank;

class SharedShelfType extends AbstractType {

    private $container;

    private $translator;

    public function __construct($container){
        $this->container = $container;
        $this->translator = $this->container->get('translator');
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options){
        $user = $this->container->get('security.token_storage')
            ->getToken()
            ->getUser();

        $builder
            ->add('type', ChoiceType::class, array(
                'choices' => [
                    'View' => SharedShelf::ACCESS_VIEW,
                    'Edit' => SharedShelf::ACCESS_EDIT,
                ],
                'choices_as_values' => true,
            ))
            ->add('userToShare', EntityType::class, [
                'class' => 'ProfileBundle:User',
                'label' => $this->translator->trans('User'),
                'query_builder' => function (UserRepository $er) use ($user){
                    $qb = $er->createQueryBuilder('u');
                    return $qb
                        ->where($qb->expr()->neq('u.id', $user->getId()))
                        ->orderBy('u.username', 'ASC');
                },
                'choice_label' => 'username',
                'required' => false,
                'constraints' => [
                    new NotBlank(),
                ],
            ]);

        $builder->add(
            $builder->create('userOwner', HiddenType::class)
                ->addModelTransformer($this->container->get('app.form.data_transformer.user_to_number_transformer'))
        );

        $builder->add(
            $builder->create('shelf', HiddenType::class)
                ->addModelTransformer($this->container->get('app.form.data_transformer.shelf_to_number_transformer'))
        );

    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function configureOptions(OptionsResolver $resolver){
        $resolver->setDefaults(array(
            'data_class' => 'BookBundle\Entity\SharedShelf'
        ));
    }

    /**
     * @return string
     */
    public function getName(){
        return 'sharedshelf';
    }
}
