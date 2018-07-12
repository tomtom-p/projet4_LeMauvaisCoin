<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('lastName', TextType::class, array(
                'label' => false,
                'attr' => array(
                    'placeholder' => 'Nom'
                )))
            ->add('firstName', TextType::class, array(
                'label' => false,
                'attr' => array(
                    'placeholder' => 'Prénom'
                )))
            ->add('email', EmailType::class, array(
                'label' => false,
                'attr' => array(
                    'placeholder' => 'email'
                )))
            ->add('password', PasswordType::class, array(
                'label' => false,
                'attr' => array(
                    'placeholder' => 'Password'
                )
            ))
            ->add('city', TextType::class, array(
                'label' => false,
                'attr' => array(
                    'placeholder' => 'Ville'
                )))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
