import { Injectable } from '@angular/core';

import { nanoid } from 'nanoid';

@Injectable()
export class GeneratorService {
    generate(n: number): string {
        return nanoid(n);
    }
}
