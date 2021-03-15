import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appActiveItem]',
})
export class ActiveItemDirective {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(
            this.elementRef.nativeElement,
            'cursor',
            'pointer'
        );
    }

    private backgroundColor = '#fff';

    @HostBinding('style.backgroundColor') get getBackgroundColor() {
        return this.backgroundColor;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.backgroundColor = '#ddd';
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.backgroundColor = '#fff';
    }
}
