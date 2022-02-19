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
        const holder = document.createElement('div') as HTMLDivElement;
        const button = document.createElement('button') as HTMLButtonElement;
        const label = document.createElement('strong') as HTMLLabelElement;

        button.classList.add('check-btn');
        label.classList.add('check-label');
        label.innerText = item.label;

        if (item.checked) {
            button.classList.add('checked');
            label.classList.add('checked');
        }
        button.addEventListener('click', () => store.toggleItem(item.id));

        holder.classList.add('item');
        holder.appendChild(button);
        holder.appendChild(label);

        buttonHolder.appendChild(holder);
    }
}