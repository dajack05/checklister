export class CheckItem {
    id: number;
    label: string;
    checked: boolean;
}

export class CheckList {
    id: number;
    label: string;
    items: CheckItem[];
}

export class DataStore {
    lists: CheckList[] = [];
    onChange = () => { };

    private intervalID: number;

    toggleItem(id: number) {
        for (const list of this.lists) {
            for (const item of list.items) {
                if (item.id === id) {
                    item.checked = !item.checked;
                    this.save();
                    return;
                }
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

        if (json.lists) {
            this.lists = json.lists;
        }

        this.onChange();

        // Set checker
        if (this.intervalID) {
            clearInterval(this.intervalID);
        }
        this.intervalID = setInterval(() => {
            this.load(name);
        }, 10000);
    }
}