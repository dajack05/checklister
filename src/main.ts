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
    for (const list of store.lists) {
        const listDiv = document.createElement('div') as HTMLDivElement;
        const listLabel = document.createElement('h1') as HTMLHeadingElement;
        listLabel.innerText = list.label;

        listDiv.classList.add('box');
        listDiv.appendChild(listLabel);

        for (const item of list.items) {
            const holder = document.createElement('div') as HTMLDivElement;
            const button = document.createElement('button') as HTMLButtonElement;
            const label = document.createElement('h2') as HTMLHeadingElement;

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

            listDiv.appendChild(holder);
        }

        buttonHolder.appendChild(listDiv);
    }
}