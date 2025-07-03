<?php
require_once __DIR__ . '/../config/dbConfig.php';;
class DatabaseConnection{
    private static $instance = null;

    private $connection;

    public function __construct(){
        $this->connect();
    }

    private function connect(){
        try{
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8";
            $this->connection = new PDO($dsn, DB_USER, DB_PASS);

            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e){
            die("Connection failed: " . $e->getMessage());
        }
    }

    public static function getInstance(){
        if(self::$instance == null){
            self::$instance = new DatabaseConnection();
        }
        return self::$instance;
    }

    public function getConnection(){
        return $this->connection;
    }
}