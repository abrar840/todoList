

export const DB_NAME = "MyAppDB";
export const DB_VERSION = 6; // Increment if schema changes
export const STORE_NAME = "items";


export function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true })
            }
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };


        request.onerror = (event) => {
            reject(event.target.error)
        };

    });
}


export async function addItem(item) {
    const db = await openDB(); //open db 
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, "readwrite");
        const store = tx.objectStore(STORE_NAME);
        const request = store.add(item);
        request.onsuccess = () => resolve(true);
        request.onerror = (e) => reject(e.taret.error);
    });
}

export async function getAllItem() {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, "readonly");
        const store = tx.objectStore(STORE_NAME);

        const request = store.getAll();
        const keyRequest = store.getAllKeys();

        request.onsuccess = () => {
            keyRequest.onsuccess = () => {
                const values = request.result;
                const keys = keyRequest.result;

                const results = keys.map((key, index) => ({
                    id: key,                // real DB key
                    ...values[index]        // spread the object
                }));

                resolve(results);
            };

            keyRequest.onerror = (e) => reject(e.target.error);
        };

        request.onerror = (e) => reject(e.target.error);
    });
}




export async function deleteItem(id) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, "readwrite");
        const store = tx.objectStore(STORE_NAME);
        const request = store.delete(id);

        request.onsuccess = () => resolve(true);   // Deleted successfully
        request.onerror = (e) => reject(e.target.error); // Failed
    });
}


export async function getItemById(id) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        if (id === undefined || id === null || isNaN(Number(id))) {
            resolve(null);
            return;
        }

        const tx = db.transaction(STORE_NAME, "readonly");
        const store = tx.objectStore(STORE_NAME);

        const numericId = Number(id);
        console.log("🔑 Fetching record with id:", numericId);

        const request = store.get(numericId);

        request.onsuccess = (e) => {
            const result = e.target.result;
            if (result) {
                resolve({ id: numericId, ...result });
            } else {
                resolve(null);
            }
        };

        request.onerror = (e) => {
            reject(e.target.error);
        };
    });
}

export async function updateItem(item, key) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, "readwrite");
        const store = tx.objectStore(STORE_NAME);
        const deleteReq = store.delete(key);
        deleteReq.onsuccess = () => {
            const addReq = store.add(item);
            addReq.onsuccess = () => {
                resolve(true);
            };

            addReq.onerror = (e) => {
                reject(e.target.error);
            };
        };

        deleteReq.onerror = (e) => {
            reject(e.target.error);
        };
    });
}
