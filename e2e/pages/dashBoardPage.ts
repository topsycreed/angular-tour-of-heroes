import { browser, element, by } from 'protractor';

export class DashBoardPage {
	paragraph = element(by.css('my-root h1'));
	
	navigateTo() {
		return browser.get('/');
	}
	
	getParagraphText() {
		return this.paragraph.getText();
	}
}

