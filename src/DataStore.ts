export class CheckItem {
    id: number;
    label: string;
    checked: boolean;
}

export class DataStore {
    items: CheckItem[] = [];

    static FromJson(json: any) {
        if (!json.items) {
            console.error("Failed to parse JSON. Missing Items.", json);
            return;
        }

        const store = new DataStore();

        for (const item of json.items) {
            store.items.push(item as CheckItem);
        }

        return store;
    }
}