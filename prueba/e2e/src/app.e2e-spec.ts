import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be blank', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
  });

  it('error on input email', () => {
    page.navigateTo();
    page.enterInputText('app-root #email-input','asdf');
    expect(page.getTextLabel('app-root #email-input-er1')).toBeDefined();
  });

  it('error on input pass', () => {
    page.navigateTo();
    page.enterInputText('app-root #pass-input','asdf');
    expect(page.getTextLabel('app-root #pass-input-er1')).toBeDefined();
  });

  it('Click button', () => {
    page.navigateTo();
    expect(page.clickButton('app-root #signin-button')).toBeDefined();
  });
});
