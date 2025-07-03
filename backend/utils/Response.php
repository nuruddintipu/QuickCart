<?php

class Response{
    public function __construct(){
        return 'initialized api response class';
    }

    private static function load($status = false, $message = '', $data = null, $error = []){
        $response = ['status' => $status, 'message' => $message, 'data' => $data];
        if(!$status && $error != null) $response['error'] = $error;

        return $response;
    }


    public static function respond($statusCode, $data){
        http_response_code($statusCode);
        echo json_encode($data);
        exit;
    }

    public static function dataFoundResponse($data){
        $response = self::load(true, 'Data found', $data);
        self::respond(200, $response);
    }

    public static function dataNotFoundResponse($message = 'Data not found'){
        $response = self::load(false, $message);
        self::respond(404, $response);
    }

    public static function errorResponse($message = 'Error', $error = []){
        $response = self::load(false, $message, null, $error);
        self::respond(400, $response);
    }

    public static function methodNotAllowedResponse($allowedMethods = '') {
        $response = self::load(false, 'Method Not Allowed. Allowed methods: ' . $allowedMethods);
        self::respond(405, $response);
    }
}