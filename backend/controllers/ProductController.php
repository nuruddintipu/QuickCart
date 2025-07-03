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
            if($products) {
                Response::dataFoundResponse($products);
            } else {
                Response::dataNotFoundResponse('No products found');;
            }
        } catch(Exception $e){
            Response::errorResponse($e->getMessage());
        }
    }

    public function getProductById($id){
        try{
            $product = $this->productService->getProductById($id);
            if($product) {
                Response::dataFoundResponse($product);
            } else {
                Response::dataNotFoundResponse('Product not found');;
            }
        } catch(Exception $e){
            Response::errorResponse($e->getMessage());
        }
    }

}