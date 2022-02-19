<?php

if (!isset($_GET['data'])) {
    die("data not set...");
}

$data = filter_input(INPUT_GET, 'data');
$file = fopen("../../data/data.json", "w") or die("Failed to load file");
$text = fwrite($file, $data);
