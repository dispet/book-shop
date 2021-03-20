import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    LocalStorageService,
    ConstantService,
    APP_CONFIG,
    GeneratorService,
    generatorFactory,
    LoginService,
    RouteService,
} from '.';

@NgModule({
    imports: [CommonModule],
    providers: [
        LocalStorageService,
        LoginService,
        RouteService,
        { provide: APP_CONFIG, useValue: ConstantService },
        { provide: GeneratorService, useFactory: generatorFactory },
    ],
})
export class ServicesModule {}
