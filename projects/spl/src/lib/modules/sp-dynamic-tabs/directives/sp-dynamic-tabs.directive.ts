import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[spDynamicTabs]'
})
export class SpDynamicTabsDirective {
  constructor(public viewContainer: ViewContainerRef) { }
}
