<?php
namespace App\Controllers;

use Core\Application;
use Core\BaseController;

class HomeController extends BaseController
{
    /**
     * @var array
     */
    private $metadata;

    function __construct(Application $app)
    {
        parent::__construct($app);

        $this->metadata = [
            'title' => 'Banerelle',
        ];
    }

    /**
     * @param      $page
     * @param null $data
     */
    private function _renderPage($page, $data = null)
    {
        try {
            $this->app->view->display('_includes/head.php', $this->metadata);
            $this->app->view->display($page.'.php', $data);
            $this->app->view->display('_includes/foot.php', $this->metadata);
        } catch (\RuntimeException $e) {
            //throw new NotFoundException('Page not found');
        }
    }

    public function index()
    {
        $data = [
            'events' => $this->_getEventData(),
        ];

        $this->_renderPage('home', $data);
    }

    public function rsvp()
    {
        $this->_renderPage('rsvp');
    }

    /**
     * Get event data for homepage display
     *
     * @return array
     */
    private function _getEventData()
    {
        $query = $this->app->query->newSelect();
        $query->cols(['*'])
              ->from('events')
              ->orderBy(['event_date desc', 'post_date desc'])
              ->limit(3);

        return $this->app->db->fetchAll($query);
    }
}