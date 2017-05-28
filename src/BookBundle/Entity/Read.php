<?php

namespace BookBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Read
 *
 * @ORM\Table(name="book_read")
 * @ORM\Entity(repositoryClass="BookBundle\Entity\ReadRepository")
 */
class Read {
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
     * @ORM\Column(name="place", type="text")
     */
    private $place;

    /**
     * @var integer
     *
     * @ORM\Column(name="pagesCount", type="integer")
     */
    private $pagesCount = 0;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="time_start", type="datetime", nullable=true)
     */
    private $timeStart;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="time_end", type="datetime", nullable=true)
     */
    private $timeEnd;

    /**
     * @var string
     *
     * @ORM\Column(name="comment", type="text", nullable=true)
     */
    private $comment;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=255, nullable=true)
     */
    private $title;

    /**
     * @var decimal
     *
     * @ORM\Column(name="latitude", type="decimal", precision=19, scale=14, nullable=true)
     */
    private $latitude;

    /**
     * @var decimal
     *
     * @ORM\Column(name="longitude", type="decimal", precision=19, scale=14, nullable=true)
     */
    private $longitude;

    /**
     * @ORM\ManyToOne(targetEntity="BookBundle\Entity\Book", inversedBy="reads")
     * @ORM\JoinColumn(name="book_id", referencedColumnName="id")
     **/
    private $book;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId(){
        return $this->id;
    }

    /**
     * Set place
     *
     * @param string $place
     * @return Read
     */
    public function setPlace($place){
        $this->place = $place;

        return $this;
    }

    /**
     * Get place
     *
     * @return string
     */
    public function getPlace(){
        return $this->place;
    }

    /**
     * Set timeStart
     *
     * @param \DateTime $timeStart
     * @return Read
     */
    public function setTimeStart($timeStart){
        $this->timeStart = $timeStart;

        return $this;
    }

    /**
     * Get timeStart
     *
     * @return \DateTime
     */
    public function getTimeStart(){
        return $this->timeStart;
    }

    /**
     * Set timeEnd
     *
     * @param \DateTime $timeEnd
     * @return Read
     */
    public function setTimeEnd($timeEnd){
        $this->timeEnd = $timeEnd;

        return $this;
    }

    /**
     * Get timeEnd
     *
     * @return \DateTime
     */
    public function getTimeEnd(){
        return $this->timeEnd;
    }

    /**
     * Set comment
     *
     * @param string $comment
     * @return Read
     */
    public function setComment($comment){
        $this->comment = $comment;

        return $this;
    }

    /**
     * Get comment
     *
     * @return string
     */
    public function getComment(){
        return $this->comment;
    }

    /**
     * Set title
     *
     * @param string $title
     * @return Read
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
     * Set book
     *
     * @param \BookBundle\Entity\Book $book
     * @return Read
     */
    public function setBook(\BookBundle\Entity\Book $book = null){
        $this->book = $book;

        return $this;
    }

    /**
     * Get book
     *
     * @return \BookBundle\Entity\Book
     */
    public function getBook(){
        return $this->book;
    }

    /**
     * Set latitude
     *
     * @param string $latitude
     * @return Read
     */
    public function setLatitude($latitude)
    {
        $this->latitude = $latitude;

        return $this;
    }

    /**
     * Get latitude
     *
     * @return string 
     */
    public function getLatitude()
    {
        return $this->latitude;
    }

    /**
     * Set longitude
     *
     * @param string $longitude
     * @return Read
     */
    public function setLongitude($longitude)
    {
        $this->longitude = $longitude;

        return $this;
    }

    /**
     * Get longitude
     *
     * @return string 
     */
    public function getLongitude()
    {
        return $this->longitude;
    }

    /**
     * Set pagesCount
     *
     * @param integer $pagesCount
     * @return Read
     */
    public function setPagesCount($pagesCount)
    {
        $this->pagesCount = $pagesCount;

        return $this;
    }

    /**
     * Get pagesCount
     *
     * @return integer 
     */
    public function getPagesCount()
    {
        return $this->pagesCount ? $this->pagesCount : 0;
    }
}
