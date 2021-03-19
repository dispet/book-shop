import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable, of, throwError } from 'rxjs';
import { catchError, publish, refCount, retry } from 'rxjs/operators';

export class AppSettingsModel {
    name: string;
    mode: number;
}

@Injectable({
    providedIn: 'root',
})
export class AppSettings {
    constructor(
        private localStorage: LocalStorageService,
        private http: HttpClient
    ) {}

    getAppSettings(): Observable<AppSettingsModel> {
        let appSettings = this.loadFromStorage();
        if (!appSettings) {
            this.loadFromAssets().subscribe(
                (settings) => {
                    appSettings = settings;
                },
                (error) => {
                    appSettings = this.getDefault();
                    this.saveToStorage(appSettings);
                }
            );
        }
        return of(appSettings);
    }

    private loadFromAssets(): Observable<AppSettingsModel> {
        return this.http
            .get<AppSettingsModel[]>('/app-settings.json')
            .pipe(
                retry(3),
                publish(),
                refCount(),
                catchError(this.handleError)
            );
    }

    private handleError(err: HttpErrorResponse) {
        console.error('An error occurred:', err.error.message);
        return throwError('Something bad happened; please try again later.');
    }

    private loadFromStorage(): AppSettingsModel {
        const appSettingsValue: AppSettingsModel = this.localStorage.getItem(
            'app-settings'
        );
        if (appSettingsValue) {
            return appSettingsValue;
        }
    }

    private saveToStorage(appSettings: AppSettingsModel): void {
        this.localStorage.setItem('app-settings', JSON.stringify(appSettings));
    }

    private getDefault(): AppSettingsModel {
        const appSettings = new AppSettingsModel();
        appSettings.mode = 1;
        appSettings.name = 'vision';
        return appSettings;
    }
}
