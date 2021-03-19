import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettings } from './core/services/app-settings.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'Book Shop';
    subscription!: Subscription;

    constructor(private appSettings: AppSettings) {}

    ngOnInit(): void {
        this.subscription = this.appSettings
            .getAppSettings()
            .subscribe((settings) => {
                console.log('Initial mode: ' + settings.mode);
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
