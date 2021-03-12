import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    setItem<T>(key: string, value: T): void {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    getItem<T>(key: string): T | null {
        const data = window.localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    }

    removeItem(key: string): void {
        window.localStorage.removeItem(key);
    }
}
