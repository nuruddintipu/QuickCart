<?php
require_once __DIR__ . '/../database/DatabaseConnection.php';

class ProductModel{
    private $dbConnection;

    private $productTableName = 'products';

    public function __construct(){
        $this->dbConnection = DatabaseConnection::getInstance()->getConnection();
    }

    public function getAllProducts(){
        $query = "SELECT * FROM {$this->productTableName}";
        $statement = $this->dbConnection->prepare($query);
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getProductById($id){
        $query = "SELECT * FROM {$this->productTableName} WHERE id = :id";
        $statement = $this->dbConnection->prepare($query);
        $statement->execute(['id' => $id]);
        return $statement->fetch(PDO::FETCH_ASSOC);
    }
}