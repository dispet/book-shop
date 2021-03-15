import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appZoom]',
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        '(click)': 'onClick()',
    },
})
export class ZoomFontDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {}

    onClick() {
        this.renderer.setStyle(this.el.nativeElement, 'font-size', '21px');
        this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
        this.renderer.setStyle(
            this.el.nativeElement,
            'border',
            '2px solid black'
        );
    }
}
