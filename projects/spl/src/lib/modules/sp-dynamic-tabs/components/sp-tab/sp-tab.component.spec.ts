import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpTabComponent } from './sp-tab.component';

describe('SpTabComponent', () => {
  let component: SpTabComponent;
  let fixture: ComponentFixture<SpTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpTabComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
