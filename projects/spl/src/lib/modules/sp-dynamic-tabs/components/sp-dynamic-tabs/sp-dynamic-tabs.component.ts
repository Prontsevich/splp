import {
  Component,
  AfterContentInit,
  ViewEncapsulation,
  ContentChildren,
  ViewChild,
  QueryList,
  ComponentFactoryResolver,
  TemplateRef
} from '@angular/core';

import { SpDynamicTabsDirective } from '../../directives/sp-dynamic-tabs.directive';
import { SpTabComponent } from '../sp-tab/sp-tab.component';

@Component({
  selector: 'sp-dynamic-tabs',
  templateUrl: './sp-dynamic-tabs.component.html',
  styleUrls: ['./sp-dynamic-tabs.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class SpDynamicTabsComponent implements AfterContentInit {
  @ContentChildren(SpTabComponent) staticTabs: QueryList<SpTabComponent>;
  @ViewChild(SpDynamicTabsDirective) dynamicTabsPlaceholder: any;

  public dynamicTabs: SpTabComponent[] = [];

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.staticTabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      if (this.staticTabs.length > 0) {
        this.selectTab(this.staticTabs.first);
      }
    }
  }

  openTab(title: string, id: string, template: TemplateRef<any>, data: any, url = '') {
    const tab = this.dynamicTabs.find(x => x.id === id);

    if (!tab) {// get a component factory for our TabComponent
      const componentFactory = this._componentFactoryResolver.resolveComponentFactory(SpTabComponent);

      // fetch the view container reference from our anchor directive
      const viewContainerRef = this.dynamicTabsPlaceholder.viewContainer;

      // alternatively...
      // let viewContainerRef = this.dynamicTabPlaceholder;

      // create a component instance
      const componentRef = viewContainerRef.createComponent(componentFactory);

      // set the according properties on our component instance
      const instance: SpTabComponent = componentRef.instance as SpTabComponent;
      instance.title = title;
      instance.id = id;
      instance.template = template;
      instance.dataContext = data;
      instance.url = url;

      // remember the dynamic component for rendering the
      // tab navigation headers
      this.dynamicTabs.push(componentRef.instance as SpTabComponent);

      // set it active
      this.selectTab(this.dynamicTabs[this.dynamicTabs.length - 1]);
    } else {
      this.selectTab(tab);
    }
  }

  selectTab(selectedTab: SpTabComponent) {
    // deactivate all tabs
    this.staticTabs.toArray().forEach(tab => tab.active = false);
    this.dynamicTabs.forEach(tab => tab.active = false);

    // activate the tab the user has clicked on.
    selectedTab.active = true;
  }

  closeTab(tab: SpTabComponent) {
    const index = this.dynamicTabs.findIndex(x => x.id === tab.id);
    if (index > -1) {
      // remove the tab from our array
      this.dynamicTabs.splice(index, 1);

      // destroy our dynamically created component again
      const viewContainerRef = this.dynamicTabsPlaceholder.viewContainer;
      // let viewContainerRef = this.dynamicTabPlaceholder;
      viewContainerRef.remove(index);

      // select previous tab
      if (this.dynamicTabs.length > 0) {
        this.selectTab(this.dynamicTabs[(index - 1) > 0 ? index - 1 : 0]);
      }
    }
  }

  closeActiveTab() {
    const activeTabs = this.dynamicTabs.filter((tab) => tab.active);
    if (activeTabs.length > 0) {
      // close the 1st active tab (should only be one at a time)
      this.closeTab(activeTabs[0]);
    }
  }
}
