import { browser, by, element, ExpectedConditions } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }

  enterInputText(sel:string, text:string){
    return element(by.css(sel)).sendKeys(text);
  }

  getTextLabel(sel:string){
    return element(by.css(sel)).getText() as Promise<string>;
  }

  clickButton(sel:string){
    const el = element(by.css('sel'));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    return el.click() as Promise<void>;
  }
}
