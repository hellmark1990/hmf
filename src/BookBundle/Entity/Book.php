<?php

namespace BookBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Book
 *
 * @ORM\Table(name="book")
 * @ORM\Entity(repositoryClass="BookBundle\Entity\BookRepository")
 * @ORM\HasLifecycleCallbacks
 */
class Book {

    const ACCESS_PRIVATE = 0;
    const ACCESS_PUBLIC = 1;

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
     * @ORM\Column(name="name", type="text")
     * @Assert\NotBlank()
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="publisher", type="text",  nullable=true)
     */
    private $publisher;

    /**
     * @var string
     *
     * @ORM\Column(name="authors", type="text",  nullable=true)
     */
    private $authors;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="publishedDate", type="datetime",  nullable=true)
     */
    private $publishedDate;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text",  nullable=true)
     */
    private $description;

    /**
     * @var integer
     *
     * @ORM\Column(name="pageCount", type="integer",  nullable=true)
     */
    private $pageCount;

    /**
     * @var integer
     *
     * @ORM\Column(name="printedPageCount", type="integer", nullable=true)
     */
    private $printedPageCount;

    /**
     * @var string
     *
     * @ORM\Column(name="imageUrl", type="text",  nullable=true)
     */
    private $imageUrl;

    /**
     * @var string
     *
     * @ORM\Column(name="language", type="string", length=255,  nullable=true)
     */
    private $language;

    /**
     * @var string
     *
     * @ORM\Column(name="previewLink", type="string", length=255,  nullable=true)
     */
    private $previewLink;

    /**
     * @var string
     *
     * @ORM\Column(name="readerLink", type="string", length=255,  nullable=true)
     */
    private $readerLink;

    /**
     * @ORM\OneToOne(targetEntity="\Application\Sonata\MediaBundle\Entity\Media", cascade={"persist"})
     */
    private $image;

    /**
     * @ORM\ManyToMany(targetEntity="BookBundle\Entity\Shelf", mappedBy="books")
     */
    private $shelfs;

    /**
     * @ORM\ManyToOne(targetEntity="ProfileBundle\Entity\User", inversedBy="books")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     **/
    private $user;

    /**
     * @ORM\OneToMany(targetEntity="BookBundle\Entity\Read", mappedBy="book", cascade={"remove"})
     * @ORM\OrderBy({"id" = "DESC"})
     */
    private $reads;

    /**
     * @ORM\OneToMany(targetEntity="BookBundle\Entity\SharedBookLink", mappedBy="book", cascade={"remove"})
     */
    private $shareLinks;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    protected $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    protected $updatedAt;

    /**
     * @var integer
     *
     * @ORM\Column(name="accessType", type="smallint")
     */
    private $accessType = 0;


    /**
     * @ORM\PrePersist
     * @ORM\PreUpdate
     */
    public function updatedTimestamps(){
        $this->setUpdatedAt(new \DateTime(date('Y-m-d H:i:s')));

        if ($this->getCreatedAt() == null) {
            $this->setCreatedAt(new \DateTime(date('Y-m-d H:i:s')));
        }
    }

    /**
     * Get id
     *
     * @return integer
     */
    public function getId(){
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return Book
     */
    public function setName($name){
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName(){
        return $this->name;
    }

    /**
     * Set publisher
     *
     * @param string $publisher
     * @return Book
     */
    public function setPublisher($publisher){
        $this->publisher = $publisher;

        return $this;
    }

    /**
     * Get publisher
     *
     * @return string
     */
    public function getPublisher(){
        return $this->publisher;
    }

    /**
     * Set publishedDate
     *
     * @param \DateTime $publishedDate
     * @return Book
     */
    public function setPublishedDate($publishedDate){
        $this->publishedDate = $publishedDate;

        return $this;
    }

    /**
     * Get publishedDate
     *
     * @return \DateTime
     */
    public function getPublishedDate(){
        return $this->publishedDate;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return Book
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
     * Set pageCount
     *
     * @param integer $pageCount
     * @return Book
     */
    public function setPageCount($pageCount){
        $this->pageCount = $pageCount;

        return $this;
    }

    /**
     * Get pageCount
     *
     * @return integer
     */
    public function getPageCount(){
        return $this->pageCount ? $this->pageCount : 0;
    }

    /**
     * Set printedPageCount
     *
     * @param integer $printedPageCount
     * @return Book
     */
    public function setPrintedPageCount($printedPageCount){
        $this->printedPageCount = $printedPageCount;

        return $this;
    }

    /**
     * Get printedPageCount
     *
     * @return integer
     */
    public function getPrintedPageCount(){
        return $this->printedPageCount;
    }

    /**
     * Set imageUrl
     *
     * @param string $imageUrl
     * @return Book
     */
    public function setImageUrl($imageUrl){
        $this->imageUrl = $imageUrl;

        return $this;
    }

    /**
     * Get imageUrl
     *
     * @return string
     */
    public function getImageUrl(){
        return $this->imageUrl;
    }

    /**
     * Set language
     *
     * @param string $language
     * @return Book
     */
    public function setLanguage($language){
        $this->language = $language;

        return $this;
    }

    /**
     * Get language
     *
     * @return string
     */
    public function getLanguage(){
        return $this->language;
    }

    /**
     * Set previewLink
     *
     * @param string $previewLink
     * @return Book
     */
    public function setPreviewLink($previewLink){
        $this->previewLink = $previewLink;

        return $this;
    }

    /**
     * Get previewLink
     *
     * @return string
     */
    public function getPreviewLink(){
        return $this->previewLink;
    }

    /**
     * Set readerLink
     *
     * @param string $readerLink
     * @return Book
     */
    public function setReaderLink($readerLink){
        $this->readerLink = $readerLink;

        return $this;
    }

    /**
     * Get readerLink
     *
     * @return string
     */
    public function getReaderLink(){
        return $this->readerLink;
    }

    /**
     * Set image
     *
     * @param \Application\Sonata\MediaBundle\Entity\Media $image
     * @return Book
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
     * Constructor
     */
    public function __construct(){
        $this->shelfs = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add shelfs
     *
     * @param \BookBundle\Entity\Shelf $shelfs
     * @return Book
     */
    public function addShelf(\BookBundle\Entity\Shelf $shelfs){
        $this->shelfs[] = $shelfs;

        return $this;
    }

    /**
     * Remove shelfs
     *
     * @param \BookBundle\Entity\Book $shelfs
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
     * Set user
     *
     * @param \ProfileBundle\Entity\User $user
     * @return Book
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
     * Add reads
     *
     * @param \BookBundle\Entity\Read $reads
     * @return Book
     */
    public function addRead(\BookBundle\Entity\Read $reads){
        $this->reads[] = $reads;

        return $this;
    }

    /**
     * Remove reads
     *
     * @param \BookBundle\Entity\Read $reads
     */
    public function removeRead(\BookBundle\Entity\Read $reads){
        $this->reads->removeElement($reads);
    }

    /**
     * Get reads
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getReads(){
        return $this->reads;
    }

    /**
     * Set authors
     *
     * @param string $authors
     * @return Book
     */
    public function setAuthors($authors){
        $this->authors = $authors;

        return $this;
    }

    /**
     * Get authors
     *
     * @return string
     */
    public function getAuthors(){
        return $this->authors;
    }

    /**
     * Add shareLinks
     *
     * @param \BookBundle\Entity\SharedBookLink $shareLinks
     * @return Book
     */
    public function addShareLink(\BookBundle\Entity\SharedBookLink $shareLinks){
        $this->shareLinks[] = $shareLinks;

        return $this;
    }

    /**
     * Remove shareLinks
     *
     * @param \BookBundle\Entity\SharedBookLink $shareLinks
     */
    public function removeShareLink(\BookBundle\Entity\SharedBookLink $shareLinks){
        $this->shareLinks->removeElement($shareLinks);
    }

    /**
     * Get shareLinks
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getShareLinks(){
        return $this->shareLinks;
    }

    public function getPageReadCount(){
        return array_sum($this->getReads()->map(function (Read $read){
            return $read->getPagesCount();
        })->toArray());
    }

    public function getPageReadPercents(){
        if (!$this->getPageCount()) {
            return 0;
        }

        return round($this->getPageReadCount() / ($this->getPageCount() / 100));
    }

    /**
     * Set createdAt
     *
     * @param \DateTime $createdAt
     * @return Book
     */
    public function setCreatedAt($createdAt){
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * Get createdAt
     *
     * @return \DateTime
     */
    public function getCreatedAt(){
        return $this->createdAt;
    }

    /**
     * Set updatedAt
     *
     * @param \DateTime $updatedAt
     * @return Book
     */
    public function setUpdatedAt($updatedAt){
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * Get updatedAt
     *
     * @return \DateTime
     */
    public function getUpdatedAt(){
        return $this->updatedAt;
    }

    /**
     * Set accessType
     *
     * @param integer $accessType
     * @return Book
     */
    public function setAccessType($accessType){
        $this->accessType = $accessType;

        return $this;
    }

    /**
     * Get accessType
     *
     * @return integer
     */
    public function getAccessType(){
        return $this->accessType;
    }

    /**
     * @return bool
     */
    public function isPublic(){
        return $this->accessType == self::ACCESS_PUBLIC;
    }

    /**
     * @return bool
     */
    public function isPrivate(){
        return $this->accessType == self::ACCESS_PRIVATE;
    }

    /**
     * @return $this
     */
    public function setPublicAccess(){
        $this->accessType = self::ACCESS_PUBLIC;
        return $this;
    }

    /**
     * @return $this
     */
    public function setPrivateAccess(){
        $this->accessType = self::ACCESS_PRIVATE;
        return $this;
    }

}
