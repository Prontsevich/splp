import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SpDynamicTabsComponent } from './components/sp-dynamic-tabs/sp-dynamic-tabs.component';
import { SpTabComponent } from './components/sp-tab/sp-tab.component';
import { SpDynamicTabsDirective } from './directives/sp-dynamic-tabs.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpTabComponent, SpDynamicTabsComponent, SpDynamicTabsDirective],
  exports: [SpTabComponent, SpDynamicTabsComponent]
})
export class SpDynamicTabsModule {
}
