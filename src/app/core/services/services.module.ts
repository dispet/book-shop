import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
    LocalStorageService,
    ConstantService,
    APP_CONFIG,
    GeneratorService,
    generatorFactory,
} from '.';

@NgModule({
    imports: [CommonModule],
    providers: [
        LocalStorageService,
        { provide: APP_CONFIG, useValue: ConstantService },
        { provide: GeneratorService, useFactory: generatorFactory },
    ],
})
export class ServicesModule {}
