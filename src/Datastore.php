<?php

class DataStore{
    static function Load(string $path){
        $res = fopen($path, "r") or die("Unable to open file!");
        $file = fread($res, filesize($path));
        $value = json_decode($file);
        echo($value);
        fclose($res);
    }
}