import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('appTitle', { static: true }) title!: ElementRef;

    ngOnInit() {
        console.log('init');
    }

    ngAfterViewInit(): void {
        this.title.nativeElement.textContent = 'Book Shop';
    }
}
