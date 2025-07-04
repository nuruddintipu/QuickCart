<?php
require_once __DIR__ . '/../services/ProductService.php';

class ProductController{

    private $productService;

    public function __construct(){
        $this->productService = new ProductService();
    }

    public function getAllProducts(){
        try{
            $products = $this->productService->getAllProducts();
            if ($products) {
                $baseUrl = $this->getBaseUrl();
                foreach ($products as &$product) {
                    $product['image'] = $baseUrl . $product['image'];
                }
                Response::dataFoundResponse($products);
            } else {
                Response::dataNotFoundResponse('No products found');;
            }
        } catch(Exception $e){
            Response::errorResponse($e->getMessage());
        }
    }

    private function getBaseUrl(){
        $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
        $host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost';
        return $scheme . '://' . $host;
    }

    public function getProductById($id){
        try{
            $product = $this->productService->getProductById($id);
            if($product) {
                $product['image'] = $this->getBaseUrl() . $product['image'];
                Response::dataFoundResponse($product);
            } else {
                Response::dataNotFoundResponse('Product not found');;
            }
        } catch(Exception $e){
            Response::errorResponse($e->getMessage());
        }
    }

}