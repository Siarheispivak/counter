import {StoreType} from "./Store/Store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('count');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: StoreType) => {
    try {
        const serializedState = JSON.stringify(state.count);
        localStorage.setItem('count', serializedState);
    } catch {
        // ignore write errors
    }
};