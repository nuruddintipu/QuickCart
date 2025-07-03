<?php
global $router;

require_once __DIR__ . '/utils/headers.php';

require_once __DIR__ . '/routes/api.php';

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

$router->dispatch($method, $uri);