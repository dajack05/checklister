<?php
if (!isset($_GET['id'])) {
    die("No ID Sent");
}

include("../Datastore.php");
$store = DataStore::Load("../../data/data.json");
$id = filter_input(INPUT_GET, 'id');

foreach ($store->items as $item) {
    if ($item->id == $id) {
        $item->checked = !$item->checked;
    }
}


DataStore::Save($store, "../../data/data.json");
