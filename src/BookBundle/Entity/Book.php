<?php

namespace BookBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Book
 *
 * @ORM\Table(name="book")
 * @ORM\Entity(repositoryClass="BookBundle\Entity\BookRepository")
 */
class Book {
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
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="publisher", type="text")
     */
    private $publisher;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="publishedDate", type="datetime")
     */
    private $publishedDate;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text")
     */
    private $description;

    /**
     * @var integer
     *
     * @ORM\Column(name="pageCount", type="integer")
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
     * @ORM\Column(name="imageUrl", type="text")
     */
    private $imageUrl;

    /**
     * @var string
     *
     * @ORM\Column(name="language", type="string", length=255)
     */
    private $language;

    /**
     * @var string
     *
     * @ORM\Column(name="previewLink", type="string", length=255)
     */
    private $previewLink;

    /**
     * @var string
     *
     * @ORM\Column(name="readerLink", type="string", length=255)
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
     * @ORM\OneToMany(targetEntity="BookBundle\Entity\Read", mappedBy="book")
     * @ORM\OrderBy({"id" = "DESC"})
     */
    private $reads;


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
        return $this->pageCount;
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
}
