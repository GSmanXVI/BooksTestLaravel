import {Component, Directive, ElementRef} from '@angular/core'

@Directive({
    selector: "[responsive-img]"
})
export class ResponsiveImgDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.height = '100%';
        el.nativeElement.style.width = 'auto';
    }
}
