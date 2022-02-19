<?php

if (!isset($_GET['name'])) {
    die("name not set...");
}

$name = filter_input(INPUT_GET, 'name');
$filename = "../../data/" . $name . ".json";
$file = fopen($filename, "r") or die("Failed to load file");
$text = fread($file, filesize($filename));

echo ($text);
