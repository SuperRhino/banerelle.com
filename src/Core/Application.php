<?php
namespace Core;


use Aura\Sql\ExtendedPdo;
use Aura\SqlQuery\QueryFactory;
use Slim\Route;
use Slim\Slim;

/**
 * Core Application
 * @property array                    settings
 * @package Core
 */
class Application extends Slim {

    /**
     * @var string The basePath to use for the application
     */
    public $basePath;

    /**
     * @param $basePath
     */
    public function __construct($basePath)
    {
        $this->basePath = rtrim($basePath, '/');

        $config = $this->loadConfigFile('config') ?: [];
        parent::__construct($config);

        $this->loadRoutes();
        $this->setupServices();
        //$this->setupErrorHandler();
        //$this->setupNotFound();

    }

    public function getCurrentUser()
    {}

    /**
     * Override the default behavior to use our own callable parsing.
     * @author @dhrrgn
     * @param $args
     * @return Route
     */
    protected function mapRoute($args)
    {
        $pattern  = array_shift($args);
        $callable = array_pop($args);
        $callable = $this->getRouteClosure($callable);
        if (substr($pattern, -1) !== '/') {
            $pattern .= '/';
        }
        $route = new Route($pattern, $callable, $this->settings['routes.case_sensitive']);
        $this->router->map($route);
        if (count($args) > 0) {
            $route->setMiddleware($args);
        }
        return $route;
    }

    private function loadRoutes()
    {
        $routes = $this->loadConfigFile('routes');
        if (! $routes) {
            throw new \RuntimeException('Missing routes file.');
        }
    }

    private function setupServices()
    {
        $this->db = new ExtendedPdo(
            'mysql:host=localhost;dbname=banerelle',
            'banerelle',
            'B4n3r3ll3!'
        );
        $this->query = new QueryFactory('mysql');
    }

    private function loadConfigFile($file)
    {
        $file = $this->basePath.'/config/'.$file.'.php';
        return is_file($file) ? require($file) : false;
    }

    /**
     * Generates a closure for the given definition.
     * @param $callable
     * @return callable
     */
    private function getRouteClosure($callable)
    {
        if (! is_string($callable)) {
            return $callable;
        }
        list($controller, $method) = $this->parseRouteCallable($callable);
        return function () use ($controller, $method) {
            $class = $this->settings['routes.controller_namespace'].$controller;
            $refClass  = new \ReflectionClass($class);
            $refMethod = $refClass->getMethod($method);
            return $refMethod->invokeArgs($refClass->newInstance($this), func_get_args());
        };
    }
    /**
     * Parses the route definition string (i.e. 'HomeController:index')
     * @param $callable
     * @return array
     */
    private function parseRouteCallable($callable)
    {
        return explode(':', $callable);
    }
}