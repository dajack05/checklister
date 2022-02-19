<?php
include_once("./DataStore.php");

$store = DataStore::Load("../data/data.json");

function getButtonText(int $position): string
{
    return "Boo";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css" />
    <title>Checklister</title>
</head>

<body>
    <div id="checklistHolder">
        <?php
        foreach ($store->items as $item) {
            echo ("<button class=\"check " . ($item->checked ? "checked" : "unchecked") . "\">{$item->label}</button>");
        }
        ?>
    </div>
</body>

</html>