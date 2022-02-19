<?php

class CheckItem
{
    public string $label;
    public bool $checked;

    function __construct(string $label, bool $checked)
    {
        $this->label = $label;
        $this->checked = $checked;
    }
}

class DataStore
{
    public $items = [];

    static function Load(string $path): DataStore
    {
        $res = fopen($path, "r") or die("Unable to open file!");
        $file = fread($res, filesize($path));
        $value = json_decode($file);
        fclose($res);

        $store = new DataStore();

        foreach ($value->items as $item) {
            $item = new CheckItem($item->label, $item->checked);
            array_push($store->items, $item);
        }

        return $store;
    }
}
