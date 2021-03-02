import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './services/local-storage.service';
import { ConstantService, APP_CONFIG } from './services/constant.service';
import { GeneratorService } from './services/generator.service';
import { GeneratorFactory } from './services/generator.service.provider';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        { provide: LocalStorageService, useClass: LocalStorageService },
        { provide: APP_CONFIG, useValue: ConstantService },
        { provide: GeneratorService, useFactory: GeneratorFactory },
    ],
})
export class CoreModule {}
