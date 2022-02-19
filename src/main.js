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

function populateButtons() {
    const buttonHolder = document.getElementById('buttonHolder');
    for (const item of store.items) {
        const elem = document.createElement('button');
        elem.innerText = item.label;
        elem.classList.add('check');
        if (item.checked) {
            elem.classList.add('checked');
        }
        buttonHolder.appendChild(elem);
    }
}