export class CheckItem {
    id: number;
    label: string;
    checked: boolean;
}

export class DataStore {
    items: CheckItem[] = [];
    onChange = () => { };

    private intervalID: number;

    toggleItem(id: number) {
        for (const item of this.items) {
            if (item.id === id) {
                item.checked = !item.checked;
                this.save();
                return;
            }
        }
    }

    async save() {
        const ret = await fetch("api/saveItems.php?data=" + JSON.stringify(this));
        const text = await ret.text();
        if (text.length > 0) {
            console.error(text);
        }

        this.onChange();
    }

    async load(name: string) {
        const ret = await fetch("api/loadItems.php?name=" + name);
        const json = await ret.json();

        if (json.items) {
            this.items = json.items;
        }

        this.onChange();

        // Set checker
        if (this.intervalID) {
            clearInterval(this.intervalID);
        }
        this.intervalID = setInterval(() => {
            this.load(name);
        }, 1000);
    }
}