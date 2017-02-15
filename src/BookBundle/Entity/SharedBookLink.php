<?php

namespace BookBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * SharedBookLink
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="BookBundle\Entity\SharedBookLinkRepository")
 * @UniqueEntity(
 *     fields={"userOwner", "book"},
 *     errorPath="salt",
 *     message="Book is already have shared link."
 * )
 */
class SharedBookLink {
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="ProfileBundle\Entity\User", inversedBy="sharedBookLinks")
     * @ORM\JoinColumn(name="user_owner_id", referencedColumnName="id")
     **/
    private $userOwner;

    /**
     * @ORM\ManyToOne(targetEntity="BookBundle\Entity\Book", inversedBy="shareLinks")
     */
    private $book;

    /**
     * @var string
     * @ORM\Column(name="salt", type="string")
     */
    private $salt;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set salt
     *
     * @param string $salt
     * @return SharedBookLink
     */
    public function setSalt($salt)
    {
        $this->salt = $salt;

        return $this;
    }

    /**
     * Get salt
     *
     * @return string 
     */
    public function getSalt()
    {
        return $this->salt;
    }

    /**
     * Set userOwner
     *
     * @param \ProfileBundle\Entity\User $userOwner
     * @return SharedBookLink
     */
    public function setUserOwner(\ProfileBundle\Entity\User $userOwner = null)
    {
        $this->userOwner = $userOwner;

        return $this;
    }

    /**
     * Get userOwner
     *
     * @return \ProfileBundle\Entity\User 
     */
    public function getUserOwner()
    {
        return $this->userOwner;
    }

    /**
     * Set book
     *
     * @param \BookBundle\Entity\Book $book
     * @return SharedBookLink
     */
    public function setBook(\BookBundle\Entity\Book $book = null)
    {
        $this->book = $book;

        return $this;
    }

    /**
     * Get book
     *
     * @return \BookBundle\Entity\Book 
     */
    public function getBook()
    {
        return $this->book;
    }
}
