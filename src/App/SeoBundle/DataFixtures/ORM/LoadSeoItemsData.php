<?php

namespace App\SeoBundle\DataFixtures\ORM;

use App\SeoBundle\Entity\SeoItem;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

class LoadSeoItemsData implements FixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $this->createUpdateSeoItem($manager, [
            'routeName' => 'homepage',
            'title' => 'Books',
            'metaDescription' => 'Books',
            'metaKeywords' => 'Books',
        ]);

        $this->createUpdateSeoItem($manager, [
            'routeName' => 'fos_user_profile_edit',
            'title' => 'My profile',
            'metaDescription' => 'My profile',
            'metaKeywords' => 'My profile',
        ]);

        $this->createUpdateSeoItem($manager, [
            'routeName' => 'book',
            'title' => 'My books',
            'metaDescription' => 'My books',
            'metaKeywords' => 'My books',
        ]);

        $this->createUpdateSeoItem($manager, [
            'routeName' => 'book_new',
            'title' => 'New book',
            'metaDescription' => 'New book',
            'metaKeywords' => 'New book',
        ]);

        $this->createUpdateSeoItem($manager, [
            'routeName' => 'book_edit',
            'title' => 'Edit book',
            'metaDescription' => 'Edit book',
            'metaKeywords' => 'Edit book',
        ]);

        $this->createUpdateSeoItem($manager, [
            'routeName' => 'book_reading',
            'title' => 'Reading',
            'metaDescription' => 'Reading',
            'metaKeywords' => 'Reading',
        ]);


        $this->createUpdateSeoItem($manager, [
            'routeName' => 'read_new_book',
            'title' => 'New read',
            'metaDescription' => 'New read',
            'metaKeywords' => 'New read',
        ]);

        $this->createUpdateSeoItem($manager, [
            'routeName' => 'read_new_book',
            'title' => 'New read',
            'metaDescription' => 'New read',
            'metaKeywords' => 'New read',
        ]);

        $this->createUpdateSeoItem($manager, [
            'routeName' => 'read_book_edit',
            'title' => 'Edit read',
            'metaDescription' => 'Edit read',
            'metaKeywords' => 'Edit read',
        ]);

        $this->createUpdateSeoItem($manager, [
            'routeName' => 'shelf',
            'title' => 'My shelves',
            'metaDescription' => 'My shelves',
            'metaKeywords' => 'My shelves',
        ]);


        $this->createUpdateSeoItem($manager, [
            'routeName' => 'shelf_edit',
            'title' => 'Edit shelf',
            'metaDescription' => 'Edit shelf',
            'metaKeywords' => 'Edit shelf',
        ]);


        $this->createUpdateSeoItem($manager, [
            'routeName' => 'shelf_new',
            'title' => 'New shelf',
            'metaDescription' => 'New shelf',
            'metaKeywords' => 'New shelf',
        ]);

        $this->createUpdateSeoItem($manager, [
            'routeName' => 'shared_shelf_users',
            'title' => 'Shared shelf users',
            'metaDescription' => 'Shared shelf users',
            'metaKeywords' => 'Shared shelf users',
        ]);

        $this->createUpdateSeoItem($manager, [
            'routeName' => 'fos_user_change_password',
            'title' => 'Change password',
            'metaDescription' => 'Change password',
            'metaKeywords' => 'Change password',
        ]);

        $this->createUpdateSeoItem($manager, [
            'routeName' => 'fos_user_security_login',
            'title' => 'Sign In',
            'metaDescription' => 'Sign In',
            'metaKeywords' => 'Sign In',
        ]);

        $this->createUpdateSeoItem($manager, [
            'routeName' => 'fos_user_resetting_request',
            'title' => 'Reset password',
            'metaDescription' => 'Reset password',
            'metaKeywords' => 'Reset password',
        ]);

        $this->createUpdateSeoItem($manager, [
            'routeName' => 'fos_user_registration_register',
            'title' => 'Sign up',
            'metaDescription' => 'Sign up',
            'metaKeywords' => 'Sign up',
        ]);


    }

    protected function createUpdateSeoItem($manager, array $data = []){
        $seoItem = $manager->getRepository('AppSeoBundle:SeoItem')->findOneBy(['routeName' => $data['routeName']]);
        $seoItem = $seoItem ? $seoItem : new SeoItem();

        $seoItem->setRouteName($data['routeName']);
        $seoItem->setTitle($data['title']);
        $seoItem->setMetaDescription($data['metaDescription']);
        $seoItem->setMetaKeywords($data['metaKeywords']);

        $manager->persist($seoItem);
        $manager->flush();
    }
}