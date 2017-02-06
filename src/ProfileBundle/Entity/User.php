<?php

namespace ProfileBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Model\User as BaseUser;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * User
 *
 * @ORM\Table(name="user")
 * @ORM\Entity(repositoryClass="ProfileBundle\Repository\UserRepository")
 */
class User extends BaseUser {
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="text", name="about", nullable=true)
     */
    private $about;

    /**
     * @ORM\Column(type="string", name="phone", nullable=true)
     */
    private $phone;

    /**
     * @ORM\Column(type="string", name="skype", nullable=true)
     */
    private $skype;

    /**
     * @ORM\Column(type="string", name="vk", nullable=true)
     */
    private $vk;

    /**
     * @ORM\Column(type="string", name="facebook", nullable=true)
     */
    private $facebook;

    /**
     * @ORM\Column(type="string", name="twitter", nullable=true)
     */
    private $twitter;

    /**
     * @ORM\OneToOne(targetEntity="\Application\Sonata\MediaBundle\Entity\Media", cascade={"persist"})
     */
    private $avatar;

    /**
     * @ORM\OneToMany(targetEntity="BookBundle\Entity\Book", mappedBy="user")
     * @ORM\OrderBy({"id" = "DESC"})
     */
    private $books;

    /**
     * @ORM\OneToMany(targetEntity="BookBundle\Entity\Shelf", mappedBy="user")
     * @ORM\OrderBy({"id" = "DESC"})
     */
    private $shelfs;

    /**
     * @ORM\OneToMany(targetEntity="BookBundle\Entity\SharedShelf", mappedBy="userOwner")
     */
    private $sharedShelfsByMe;

    /**
     * @ORM\OneToMany(targetEntity="\BookBundle\Entity\SharedShelf", mappedBy="userToShare")
     */
    private $sharedShelfsToMe;

    /**
     * @ORM\OneToMany(targetEntity="BookBundle\Entity\SharedShelfLink", mappedBy="userOwner")
     */
    private $sharedShelfLinks;

    /**
     * @ORM\OneToMany(targetEntity="BookBundle\Entity\SharedBookLink", mappedBy="userOwner")
     */
    private $sharedBookLinks;

    public function __construct(){
        parent::__construct();
        // your own logic
    }

    /**
     * Set about
     *
     * @param string $about
     * @return User
     */
    public function setAbout($about){
        $this->about = $about;

        return $this;
    }

    /**
     * Get about
     *
     * @return string
     */
    public function getAbout(){
        return $this->about;
    }

    /**
     * Set phone
     *
     * @param string $phone
     * @return User
     */
    public function setPhone($phone){
        $this->phone = $phone;

        return $this;
    }

    /**
     * Get phone
     *
     * @return string
     */
    public function getPhone(){
        return $this->phone;
    }

    /**
     * Set skype
     *
     * @param string $skype
     * @return User
     */
    public function setSkype($skype){
        $this->skype = $skype;

        return $this;
    }

    /**
     * Get skype
     *
     * @return string
     */
    public function getSkype(){
        return $this->skype;
    }

    /**
     * Set vk
     *
     * @param string $vk
     * @return User
     */
    public function setVk($vk){
        $this->vk = $vk;

        return $this;
    }

    /**
     * Get vk
     *
     * @return string
     */
    public function getVk(){
        return $this->vk;
    }

    /**
     * Set facebook
     *
     * @param string $facebook
     * @return User
     */
    public function setFacebook($facebook){
        $this->facebook = $facebook;

        return $this;
    }

    /**
     * Get facebook
     *
     * @return string
     */
    public function getFacebook(){
        return $this->facebook;
    }

    /**
     * Set twitter
     *
     * @param string $twitter
     * @return User
     */
    public function setTwitter($twitter){
        $this->twitter = $twitter;

        return $this;
    }

    /**
     * Get twitter
     *
     * @return string
     */
    public function getTwitter(){
        return $this->twitter;
    }

    /**
     * Set avatar
     *
     * @param \Application\Sonata\MediaBundle\Entity\Media $avatar
     * @return User
     */
    public function setAvatar(\Application\Sonata\MediaBundle\Entity\Media $avatar = null){
        $this->avatar = $avatar;

        return $this;
    }

    /**
     * Get avatar
     *
     * @return \Application\Sonata\MediaBundle\Entity\Media
     */
    public function getAvatar(){
        return $this->avatar;
    }


    /**
     * Add books
     *
     * @param \BookBundle\Entity\Book $books
     * @return User
     */
    public function addBook(\BookBundle\Entity\Book $books){
        $this->books[] = $books;

        return $this;
    }

    /**
     * Remove books
     *
     * @param \BookBundle\Entity\Book $books
     */
    public function removeBook(\BookBundle\Entity\Book $books){
        $this->books->removeElement($books);
    }

    /**
     * Get books
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getBooks(){
        return $this->books;
    }

    /**
     * Add shelfs
     *
     * @param \BookBundle\Entity\Shelf $shelfs
     * @return User
     */
    public function addShelf(\BookBundle\Entity\Shelf $shelfs){
        $this->shelfs[] = $shelfs;

        return $this;
    }

    /**
     * Remove shelfs
     *
     * @param \BookBundle\Entity\Shelf $shelfs
     */
    public function removeShelf(\BookBundle\Entity\Shelf $shelfs){
        $this->shelfs->removeElement($shelfs);
    }

    /**
     * Get shelfs
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getShelfs(){
        return $this->shelfs;
    }

    /**
     * Add sharedShelfsByMe
     *
     * @param \BookBundle\Entity\SharedShelf $sharedShelfsByMe
     * @return User
     */
    public function addSharedShelfsByMe(\BookBundle\Entity\SharedShelf $sharedShelfsByMe){
        $this->sharedShelfsByMe[] = $sharedShelfsByMe;

        return $this;
    }

    /**
     * Remove sharedShelfsByMe
     *
     * @param \BookBundle\Entity\SharedShelf $sharedShelfsByMe
     */
    public function removeSharedShelfsByMe(\BookBundle\Entity\SharedShelf $sharedShelfsByMe){
        $this->sharedShelfsByMe->removeElement($sharedShelfsByMe);
    }

    /**
     * Get sharedShelfsByMe
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getSharedShelfsByMe(){
        return $this->sharedShelfsByMe;
    }

    /**
     * Add sharedShelfsToMe
     *
     * @param \BookBundle\Entity\SharedShelf $sharedShelfsToMe
     * @return User
     */
    public function addSharedShelfsToMe(\BookBundle\Entity\SharedShelf $sharedShelfsToMe){
        $this->sharedShelfsToMe[] = $sharedShelfsToMe;

        return $this;
    }

    /**
     * Remove sharedShelfsToMe
     *
     * @param \BookBundle\Entity\SharedShelf $sharedShelfsToMe
     */
    public function removeSharedShelfsToMe(\BookBundle\Entity\SharedShelf $sharedShelfsToMe){
        $this->sharedShelfsToMe->removeElement($sharedShelfsToMe);
    }

    /**
     * Get sharedShelfsToMe
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getSharedShelfsToMe(){
        return $this->sharedShelfsToMe->map(function ($item){
            return $item->getShelf();
        });
    }

    /**
     * Add sharedShelfLinks
     *
     * @param \BookBundle\Entity\SharedShelfLink $sharedShelfLinks
     * @return User
     */
    public function addSharedShelfLink(\BookBundle\Entity\SharedShelfLink $sharedShelfLinks){
        $this->sharedShelfLinks[] = $sharedShelfLinks;

        return $this;
    }

    /**
     * Remove sharedShelfLinks
     *
     * @param \BookBundle\Entity\SharedShelfLink $sharedShelfLinks
     */
    public function removeSharedShelfLink(\BookBundle\Entity\SharedShelfLink $sharedShelfLinks){
        $this->sharedShelfLinks->removeElement($sharedShelfLinks);
    }

    /**
     * Get sharedShelfLinks
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getSharedShelfLinks(){
        return $this->sharedShelfLinks;
    }

    public function getAvatarLetters(){
        $username = mb_strtoupper($this->getUsername());
        $usernameExploded = explode(' ', $username);

        if (count($usernameExploded) > 1) {
            return $usernameExploded[0][0] . $usernameExploded[1][0];
        }

        return $username[0] . $username[1];
    }
}
