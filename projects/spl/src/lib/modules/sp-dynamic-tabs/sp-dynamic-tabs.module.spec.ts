import { SpDynamicTabsModule } from './sp-dynamic-tabs.module';

describe('SpDynamicTabsModule', () => {
  let spDynamicTabsModule: SpDynamicTabsModule;

  beforeEach(() => {
    spDynamicTabsModule = new SpDynamicTabsModule();
  });

  it('should create an instance', () => {
    expect(spDynamicTabsModule).toBeTruthy();
  });
});
