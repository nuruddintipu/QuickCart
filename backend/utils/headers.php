<?php
$allowed_origins = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3003'];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
}

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
    http_response_code(200);
    exit;
}