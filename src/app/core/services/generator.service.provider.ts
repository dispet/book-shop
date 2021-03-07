import { GeneratorService } from './generator.service';

export const generatorFactory = (n: number) => {
    return new GeneratorService().generate(n);
};
