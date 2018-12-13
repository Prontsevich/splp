import { NgModule } from '@angular/core';
import { SpDynamicTabsModule } from './modules/sp-dynamic-tabs/sp-dynamic-tabs.module';

@NgModule({
  imports: [
    SpDynamicTabsModule
  ],
  exports: [ SpDynamicTabsModule]
})
export class SplModule { }
