import { DataStore } from "./DataStore";

window.onload = () => {
    loadItems();
};

let store = new DataStore();

async function loadItems() {
    const ret = await fetch("api/loadItems.php");
    const json = await ret.json();
    store = DataStore.FromJson(json);
    populateButtons();
}

async function publishChanges() {
    const ret = await fetch("api/saveItems.php?data=" + JSON.stringify(store));
    const text = await ret.text();
    if (text.length > 0) {
        console.error(text);
    }
}

function populateButtons() {
    const buttonHolder = document.getElementById('buttonHolder');
    buttonHolder.innerHTML = "";
    for (const item of store.items) {
        const elem = document.createElement('button');
        elem.innerText = item.label;
        elem.classList.add('check');
        if (item.checked) {
            elem.classList.add('checked');
        }
        elem.addEventListener('click', () => {
            item.checked = !item.checked;
            publishChanges();
            populateButtons();
        });
        buttonHolder.appendChild(elem);
    }
}