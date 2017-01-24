<?php

namespace BookBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * SharedShelf
 *
 * @ORM\Table(name="shelf_shared")
 * @ORM\Entity(repositoryClass="BookBundle\Entity\SharedShelfRepository")
 */
class SharedShelf {
    const ACCESS_VIEW = 0;
    const ACCESS_EDIT = 1;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var integer
     *
     * @ORM\Column(name="type", type="integer")
     */
    private $type = 0;

    /**
     * @ORM\ManyToOne(targetEntity="ProfileBundle\Entity\User", inversedBy="sharedShelfsByMe")
     * @ORM\JoinColumn(name="user_owner_id", referencedColumnName="id")
     **/
    private $userOwner;

    /**
     * @ORM\ManyToOne(targetEntity="ProfileBundle\Entity\User", inversedBy="sharedShelfsToMe")
     * @ORM\JoinColumn(name="user_share_id", referencedColumnName="id")
     **/
    private $userToShare;

    /**
     * @ORM\ManyToOne(targetEntity="BookBundle\Entity\Shelf", inversedBy="shareUsers")
     */
    private $shelf;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId(){
        return $this->id;
    }

    /**
     * Set type
     *
     * @param integer $type
     * @return SharedShelf
     */
    public function setType($type){
        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return integer
     */
    public function getType(){
        return $this->type;
    }

    /**
     * Set userOwner
     *
     * @param \ProfileBundle\Entity\User $userOwner
     * @return SharedShelf
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
     * Set userToShare
     *
     * @param \ProfileBundle\Entity\User $userToShare
     * @return SharedShelf
     */
    public function setUserToShare(\ProfileBundle\Entity\User $userToShare = null){
        $this->userToShare = $userToShare;

        return $this;
    }

    /**
     * Get userToShare
     *
     * @return \ProfileBundle\Entity\User
     */
    public function getUserToShare(){
        return $this->userToShare;
    }

    /**
     * Set shelf
     *
     * @param \BookBundle\Entity\Shelf $shelf
     * @return SharedShelf
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
}
