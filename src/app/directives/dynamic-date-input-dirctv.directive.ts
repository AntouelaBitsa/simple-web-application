import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDynamicDateInputDirctv]',
  standalone: true
})
export class DynamicDateInputDirctvDirective {

  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus(){
    this.el.nativeElement.type = 'date';
  }

  @HostListener('blur') onBlur(){
    if(!this.el.nativeElement.value){
      this.el.nativeElement.type = 'text';
      this.el.nativeElement.placeholder = 'dd/mm/yyyy';
    }
  }
}

