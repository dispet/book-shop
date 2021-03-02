import { GeneratorService } from './generator.service';

export const GeneratorFactory = (n: number) => {
    return new GeneratorService().generate(n);
};
