<?php
require_once __DIR__ . '/../utils/response.php';

class Router {
    private $routes = [];

    public function addRoute($method, $route, $handlerFunction) {
        $this->routes[] = [
            'method' => strtoupper($method),
            'route' =>  rtrim($route, '/'),
            'handler' => $handlerFunction
        ];
    }

    public function dispatch($method, $uri) {
        error_log($uri);
        $allowedMethods = [];

        foreach ($this->routes as $routeDef) {
            if ($this->routeMatches($routeDef['route'], $uri, $matches)) {
                if ($method === $routeDef['method']) {
                    $this->callHandler($routeDef['handler'], $matches);
                    return;
                }
                $allowedMethods[] = $routeDef['method'];
            }
        }

        if (!empty($allowedMethods)) {
            Response::methodNotAllowedResponse(implode(', ', $allowedMethods));
            return;
        }

        Response::dataNotFoundResponse('No route found');
    }

    private function routeMatches($routePattern, $uri, &$matches = null) {
        $regexPattern = $this->generateRegexPattern($routePattern);
        return preg_match($regexPattern, $uri, $matches) === 1;
    }

    private function generateRegexPattern($route) {
        $routeWithParams = preg_replace('#:(\w+)#', '([^/]+)', $route);
        return "#^" . $routeWithParams . "/?$#";
    }

    private function callHandler($handler, $matches) {
        array_shift($matches);
        call_user_func_array($handler, $matches);
    }
}
