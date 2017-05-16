<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('AppBundle:default:index.html.twig', array(
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..'),
            'best_readers' => $this->get('book.widget')->getBestReaders(),
        ));
    }

    /**
     * @Route("/fn", name="fn")
     */
    public function findNameAction(Request $request)
    {
        $dictionaryFilePath=str_replace('app', 'web', $this->get('kernel')->getRootDir()) . '/words.txt';
        $dictionary = file_get_contents($dictionaryFilePath);
        $dictionary = explode("\n",$dictionary);

        $mainWord = 'book';
        foreach($dictionary as $word){
            if(mb_strlen($word) == 3){
                echo $mainWord . $word;
                echo '<br>';
            }
        }

//       dump(explode("\n",$dictionary));exit;
    }
}
