class CheckItem {
    constructor(id, label, checked) {
        this.id = id;
        this.label = label;
        this.checked = checked;
    }
}

class DataStore {
    constructor() {
        this.items = [];
    }

    static FromJson(json) {
        if (!json.items) {
            console.error("Failed to parse JSON. Missing Items.", json);
            return;
        }

        const store = new DataStore();

        for (const item of json.items) {
            store.items.push(new CheckItem(item.id, item.label, item.checked));
        }

        return store;
    }
}