<?php
require_once __DIR__ . '/../routes/Router.php';
require_once __DIR__ . '/../controllers/ProductController.php';

$router = new Router();
$productController = new ProductController();

$router->addRoute('GET', '/api/products', [$productController, 'getAllProducts']);
$router->addRoute('GET', '/api/products/:id', [$productController, 'getProductById']);