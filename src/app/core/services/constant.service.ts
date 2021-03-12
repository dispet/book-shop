import { InjectionToken } from '@angular/core';

export interface AppConfig {
    app: string;
    version: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('constant.service');

export const ConstantService: AppConfig = {
    app: 'Book Shop',
    version: '1.0',
};
