import { Component, Optional, Inject, OnInit } from '@angular/core';

import {
    generatorFactory,
    GeneratorService,
    ConfigOptionsService,
    LocalStorageService,
} from '../../../core/services';
import {
    ConstantService,
    AppConfig,
} from 'src/app/core/services/constant.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    generator!: GeneratorService;
    storage!: LocalStorageService;
    constant!: AppConfig;

    constructor(
        private config: ConfigOptionsService,
        @Optional() @Inject(generatorFactory) generator: GeneratorService,
        @Optional() @Inject(LocalStorageService) storage: LocalStorageService,
        @Optional() @Inject(ConstantService) constant: AppConfig
    ) {}

    ngOnInit(): void {
        console.log(
            this.generator?.generate(16),
            this.config?.getPreferences(),
            this.storage?.getItem('test'),
            this.constant
        );
    }
}
