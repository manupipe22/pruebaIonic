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

  it('input email', () => {
    page.navigateTo();
    page.enterInputText('#emailinput','asdf');
    //expect(page.getTextLabel('#emailinputer1')).toBeDefined();
    expect(page.enterInputText('#emailinput','asdf')).toBeDefined();
  });

  it('input pass', () => {
    page.navigateTo();
    page.enterInputText('#passinput','asdf');
    //expect(page.getTextLabel('#passinputer1')).toBeDefined();
    expect(page.enterInputText('#passinput','asdf')).toBeDefined();

  });

  it('Click button', () => {
    page.navigateTo();
    expect(page.clickButton('#signinbutton')).toBeDefined();
  });
});
