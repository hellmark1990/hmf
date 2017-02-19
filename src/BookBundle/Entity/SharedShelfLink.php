<?php

namespace BookBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * SharedShelfLink
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="BookBundle\Entity\SharedShelfLinkRepository")
 * @UniqueEntity(
 *     fields={"userOwner", "shelf"},
 *     errorPath="salt",
 *     message="Shelf is already have shared link."
 * )
 */
class SharedShelfLink {
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="ProfileBundle\Entity\User", inversedBy="sharedShelfLinks")
     * @ORM\JoinColumn(name="user_owner_id", referencedColumnName="id")
     **/
    private $userOwner;

    /**
     * @ORM\ManyToOne(targetEntity="BookBundle\Entity\Shelf", inversedBy="shareLinks")
     */
    private $shelf;

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
    public function getId(){
        return $this->id;
    }

    /**
     * Set userOwner
     *
     * @param \ProfileBundle\Entity\User $userOwner
     * @return SharedShelfLink
     */
    public function setUserOwner(\ProfileBundle\Entity\User $userOwner = null){
        $this->userOwner = $userOwner;

        return $this;
    }

    /**
     * Get userOwner
     *
     * @return \ProfileBundle\Entity\User
     */
    public function getUserOwner(){
        return $this->userOwner;
    }

    /**
     * Set shelf
     *
     * @param \BookBundle\Entity\Shelf $shelf
     * @return SharedShelfLink
     */
    public function setShelf(\BookBundle\Entity\Shelf $shelf = null){
        $this->shelf = $shelf;

        return $this;
    }

    /**
     * Get shelf
     *
     * @return \BookBundle\Entity\Shelf
     */
    public function getShelf(){
        return $this->shelf;
    }

    /**
     * Set salt
     *
     * @param string $salt
     * @return SharedShelfLink
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
}
