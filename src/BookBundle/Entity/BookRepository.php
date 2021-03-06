<?php

namespace BookBundle\Entity;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\QueryBuilder;
use ProfileBundle\Entity\User;

/**
 * BookRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class BookRepository extends EntityRepository {

    public function getFilteredBooks(User $user, $orderBy, $orderDirection, array $filter = []){
        $qb = $this->getEntityManager()->createQueryBuilder();

        $queryBooks = $qb->select('b')
            ->from('BookBundle:Book', 'b')
            ->join('b.user', 'u', 'WITH', 'u.id = :userId')
            ->setParameters([
                'userId' => $user->getId()
            ]);

        $queryBooks = $this->filterBooks($queryBooks, $filter);
        $queryBooks = $this->sortBooks($queryBooks, $orderBy, $orderDirection);

        $query = $queryBooks->getQuery();
        $books = $query->getResult();

        return $this->fixResult($books);
    }

    protected function sortBooks(QueryBuilder $queryBooks, $orderBy, $orderDirection){
        if ($orderBy == 'readPagesCount') {
            $queryBooks->addSelect(
                '(
                    SELECT SUM(r.pagesCount)
                    FROM BookBundle:Read AS r  
                    WHERE r.book=b  
                    GROUP BY r.book
                ) as readPagesCount'
            );
        }

        return $queryBooks->orderBy($orderBy, $orderDirection);
    }

    protected function filterBooks(QueryBuilder $queryBooks, $filter){
        if (isset($filter['books'])) {
            $queryBooks->andWhere($queryBooks->expr()->in('b.id', $filter['books']));
        }

        if (isset($filter['shelves'])) {
            $queryBooks->join('b.shelfs', 'sh');
            $queryBooks->andWhere($queryBooks->expr()->in('sh.id', $filter['shelves']));
        }

        if (isset($filter['authors'])) {
            $queryBooks->andWhere($queryBooks->expr()->in('b.authors', $filter['authors']));
        }

        if (isset($filter['locations']['exists'])) {
            $queryBooks->join('b.reads', 'r');
            $queryBooks->andWhere($queryBooks->expr()->in('r.id', $filter['locations']['exists']));
        }

        if (isset($filter['locations']['custom'])) {
            $queryBooks->join('b.reads', 'r');
            $queryBooks->andWhere(
                $queryBooks->expr()
                    ->like('r.place', $queryBooks->expr()
                        ->literal('%' . $filter['locations']['custom'] . '%')
                    )
            );
        }

        return $queryBooks;
    }

    protected function fixResult($books){
        if (!$books || !is_array($books[0])) {
            return $books;
        }

        $result = [];
        foreach ($books as $book) {
            $result[] = $book[0];
        }
        return $result;
    }
}
