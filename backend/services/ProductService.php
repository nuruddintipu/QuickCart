<?php
require_once __DIR__ . '/../models/ProductModel.php';

class ProductService{

    private $productModel;

    public function __construct(){
        $this->productModel = new ProductModel();
    }

    public function getAllProducts(){
        return $this->productModel->getAllProducts();
    }

    public function getProductById($id){
        return $this->productModel->getProductById($id);
    }
}