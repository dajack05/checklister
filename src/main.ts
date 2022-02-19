import { DataStore } from "./DataStore";

const store = new DataStore();
store.onChange = () => {
    populateButtons();
};

window.onload = async () => {
    store.load("data");
};

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
        elem.addEventListener('click', () => store.toggleItem(item.id));
        buttonHolder.appendChild(elem);
    }
}