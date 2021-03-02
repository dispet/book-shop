import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';

@Injectable({
    providedIn: 'root',
})
export class GeneratorService {
    constructor() {}

    generate(n: number): string {
        return nanoid(n);
    }
}
