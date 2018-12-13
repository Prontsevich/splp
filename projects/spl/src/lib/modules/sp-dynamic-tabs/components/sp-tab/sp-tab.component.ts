import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sp-tab',
  templateUrl: './sp-tab.component.html',
  styleUrls: ['./sp-tab.component.styl'],
  encapsulation: ViewEncapsulation.None
})

export class SpTabComponent {
  @Input() title: string;
  @Input() id: string;
  @Input() active = false;
  @Input() template;
  @Input() dataContext;
  @Input() url: string;
}
