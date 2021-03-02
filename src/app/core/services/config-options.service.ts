import { Injectable } from '@angular/core';

interface Preferences {
    id: string;
    login: string;
    email: string;
}

@Injectable({
    providedIn: 'root',
})
export class ConfigOptionsService {
    private preferences: Preferences | null = null;

    constructor() {}

    setPreferences(preferences: Preferences): void {
        this.preferences = { ...this.preferences, ...preferences };
    }

    getPreferences(): Preferences | null {
        return this.preferences;
    }
}
