<?php

$file = fopen("../../data/data.json", "r") or die("Failed to load file");
$text = fread($file, filesize("../../data/data.json"));

echo ($text);
