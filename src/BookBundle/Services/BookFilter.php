<?php
/**
 * Created by PhpStorm.
 * User: mark
 * Date: 28.01.16
 * Time: 1:58
 */

namespace BookBundle\Services;

use ProfileBundle\Entity\User;
use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;


class BookFilter {

    /**
     * @var ContainerInterface
     */
    protected $service_container;

    /**
     * @var DataCollectorTranslator
     */
    protected $translator;

    /**
     * @var
     */
    protected $em;

    /**
     * @var User
     */
    protected $user;

    /**
     * @var
     */
    protected $filterOptions;


    const DEFAULT_SORTING_COLUMN = 'b.name ASC';

    static $SORTING_DIRECTIONS = [
        'asc' => 'ASC',
        'desc' => 'DESC',
    ];

    static $SORTING_COLUMNS = [
        'name_asc' => 'b.name ASC',
        'name_desc' => 'b.name DESC',
        'date_asc' => 'b.createdAt ASC',
        'date_desc' => 'b.createdAt DESC',
        'author_asc' => 'b.authors ASC',
        'author_desc' => 'b.authors DESC',
        'pageCount_asc' => 'b.pageCount ASC',
        'pageCount_desc' => 'b.pageCount DESC',
        'readPageCount_asc' => 'readPagesCount ASC',
        'readPageCount_desc' => 'readPagesCount DESC',
    ];


    public function __construct(ContainerInterface $container, $em){
        $this->service_container = $container;
        $this->translator = $this->service_container->get('translator');
        $this->em = $em;
        $this->user = $this->service_container->get('security.context')->getToken();
        $this->user = $this->user ? $this->user->getUser() : null;
    }

    public function getOptions(){
        if (!$this->user) {
            return [];
        }

        return [
            'sort' => [
                'date_asc' => $this->translator->trans('Created Ascending'),
                'date_desc' => $this->translator->trans('Created Descending'),
                'name_asc' => $this->translator->trans('Title Ascending'),
                'name_desc' => $this->translator->trans('Title Descending'),
                'author_asc' => $this->translator->trans('Author Ascending'),
                'author_desc' => $this->translator->trans('Author Descending'),
                'pageCount_asc' => $this->translator->trans('Pages count Ascending'),
                'pageCount_desc' => $this->translator->trans('Pages count Descending'),
                'readPageCount_asc' => $this->translator->trans('Read pages count Ascending'),
                'readPageCount_desc' => $this->translator->trans('Read pages count Descending'),
            ],
            'sort_directions' => [
                'asc' => $this->translator->trans('Ascending'),
                'desc' => $this->translator->trans('Descending'),
            ],
            'filter' => [
                'shelves' => $this->user ? $this->user->getShelfs() : [],
                'name' => $this->user->getBooks(),
                'author' => $this->user->getBooks(),
                'locations' => $this->user->getBooksReads(),
            ]
        ];
    }

    public function getBooks(Request $request){
        $this->prepareRequestParams($request);
        $sorting = explode(' ', $this->getSortingColumn());
        $sortingOrder = $sorting[0];
        $sortingDirection = $sorting[1];

        return $this->em
            ->getRepository('BookBundle:Book')
            ->getFilteredBooks(
                $this->user,
                $sortingOrder,
                $sortingDirection,
                $this->getFilterOptions()
            );
    }

    protected function prepareRequestParams(Request $request){
        $this->filterOptions = $request->get('filter');
    }

    protected function getSortingColumn(){
        if (!$this->filterOptions) {
            return self::DEFAULT_SORTING_COLUMN;
        }

        $requestSort = self::$SORTING_COLUMNS[$this->filterOptions['sort']['name']];
        return $requestSort ? $requestSort : self::DEFAULT_SORTING_COLUMN;
    }

    protected function getFilterOptions(){
        $options = [];

        if (!$this->filterOptions) {
            return [];
        }

        if (isset($this->filterOptions['books'])) {
            $options['books'] = $this->filterOptions['books'];
        }

        if (isset($this->filterOptions['shelves'])) {
            $options['shelves'] = $this->filterOptions['shelves'];
        }

        if (isset($this->filterOptions['authors'])) {
            $options['authors'] = $this->filterOptions['authors'];
        }

        if ($this->filterOptions['locations']['type'] == 'exists' && (isset($this->filterOptions['locations']['exists']) && $this->filterOptions['locations']['exists'])) {
            $options['locations']['exists'] = $this->filterOptions['locations']['exists'];
        }

        if ($this->filterOptions['locations']['type'] == 'search' && $this->filterOptions['locations']['custom']) {
            $options['locations']['custom'] = $this->filterOptions['locations']['custom'];
        }

        return $options;


    }


}