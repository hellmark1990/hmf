<?php

namespace BookBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Shelf
 *
 * @ORM\Table(name="shelf")
 * @ORM\Entity(repositoryClass="BookBundle\Entity\ShelfRepository")
 */
class Shelf {

    const ACCESS_PRIVATE = 0;
    const ACCESS_PUBLIC = 1;
    const ACCESS_SHARED = 2;

    static $ACCESS_NAMES = [
        self::ACCESS_PRIVATE => 'Private',
        self::ACCESS_PUBLIC => 'Public',
        self::ACCESS_SHARED => 'Shared',
    ];


    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=255)
     * @Assert\NotBlank()
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", nullable=true)
     */
    private $description;

    /**
     * @var integer
     *
     * @ORM\Column(name="access", type="integer")
     */
    private $access = 0;

    /**
     * @var integer
     *
     * @ORM\Column(name="deleted", type="integer")
     */
    private $deleted = 0;

    /**
     * @ORM\ManyToMany(targetEntity="BookBundle\Entity\Book", inversedBy="shelfs")
     * @ORM\JoinTable(name="book_shelfs")
     */
    private $books;

    /**
     * @ORM\OneToOne(targetEntity="\Application\Sonata\MediaBundle\Entity\Media", cascade={"persist"})
     */
    private $image;

    /**
     * @ORM\ManyToOne(targetEntity="ProfileBundle\Entity\User", inversedBy="shelfs")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     **/
    private $user;

    /**
     * @ORM\OneToMany(targetEntity="BookBundle\Entity\SharedShelf", mappedBy="shelf")
     */
    private $shareUsers;

    /**
     * @ORM\OneToMany(targetEntity="BookBundle\Entity\SharedShelfLink", mappedBy="shelf")
     */
    private $shareLinks;




    /**
     * Get id
     *
     * @return integer
     */
    public function getId(){
        return $this->id;
    }

    /**
     * Set title
     *
     * @param string $title
     * @return Shelf
     */
    public function setTitle($title){
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle(){
        return $this->title;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return Shelf
     */
    public function setDescription($description){
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription(){
        return $this->description;
    }

    /**
     * Set access
     *
     * @param integer $access
     * @return Shelf
     */
    public function setAccess($access){
        $this->access = $access;

        return $this;
    }

    /**
     * Get access
     *
     * @return integer
     */
    public function getAccess(){
        return $this->access;
    }

    /**
     * Get Access name
     *
     * @return mixed
     */
    public function getAccessName(){
        return self::$ACCESS_NAMES[$this->access];
    }

    /**
     * Set deleted
     *
     * @param integer $deleted
     * @return Shelf
     */
    public function setDeleted($deleted){
        $this->deleted = $deleted;

        return $this;
    }

    /**
     * Get deleted
     *
     * @return integer
     */
    public function getDeleted(){
        return $this->deleted;
    }

    /**
     * Constructor
     */
    public function __construct(){
        $this->books = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add books
     *
     * @param \BookBundle\Entity\Book $books
     * @return Shelf
     */
    public function addBook(Book $books){
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
     * Set image
     *
     * @param \Application\Sonata\MediaBundle\Entity\Media $image
     * @return Shelf
     */
    public function setImage(\Application\Sonata\MediaBundle\Entity\Media $image = null){
        $this->image = $image;

        return $this;
    }

    /**
     * Get image
     *
     * @return \Application\Sonata\MediaBundle\Entity\Media
     */
    public function getImage(){
        return $this->image;
    }

    /**
     * Set user
     *
     * @param \ProfileBundle\Entity\User $user
     * @return Shelf
     */
    public function setUser(\ProfileBundle\Entity\User $user = null){
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \ProfileBundle\Entity\User
     */
    public function getUser(){
        return $this->user;
    }

    /**
     * Add shareUsers
     *
     * @param \BookBundle\Entity\SharedShelf $shareUsers
     * @return Shelf
     */
    public function addShareUser($userOwner, $userToShare){
        $sharedShelf = new SharedShelf();
        $sharedShelf->setUserOwner($userOwner);
        $sharedShelf->setUserToShare($userToShare);
        $sharedShelf->setShelf($this);

        $this->shareUsers[] = $sharedShelf;

        return $this;
    }

    /**
     * Remove shareUsers
     *
     * @param \BookBundle\Entity\SharedShelf $shareUsers
     */
    public function removeShareUser(\BookBundle\Entity\SharedShelf $shareUsers){
        $this->shareUsers->removeElement($shareUsers);
    }

    /**
     * Get shareUsers
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getShareUsers(){
        return $this->shareUsers->map(function ($item){
            return $item->getUserToShare();
        });
    }

    /**
     * Add shareLinks
     *
     * @param \BookBundle\Entity\SharedShelfLink $shareLinks
     * @return Shelf
     */
    public function addShareLink(\BookBundle\Entity\SharedShelfLink $shareLinks)
    {
        $this->shareLinks[] = $shareLinks;

        return $this;
    }

    /**
     * Remove shareLinks
     *
     * @param \BookBundle\Entity\SharedShelfLink $shareLinks
     */
    public function removeShareLink(\BookBundle\Entity\SharedShelfLink $shareLinks)
    {
        $this->shareLinks->removeElement($shareLinks);
    }

    /**
     * Get shareLinks
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getShareLinks()
    {
        return $this->shareLinks;
    }
}
