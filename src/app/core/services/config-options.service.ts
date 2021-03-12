import { Injectable } from '@angular/core';

interface Preferences {
    id: string;
    login: string;
    email: string;
}

@Injectable()
export class ConfigOptionsService {
    private preferences: Preferences | null = null;

    setPreferences(preferences: Preferences): void {
        this.preferences = { ...this.preferences, ...preferences };
    }

    getPreferences(): Preferences | null {
        return this.preferences;
    }
}
