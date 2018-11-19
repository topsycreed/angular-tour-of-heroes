import { browser, element, by } from 'protractor';

export class DashBoardPage {
	paragraph = element(by.css('my-root h1'));
	topHeroesTitle = element(by.css('my-dashboard h3'));
	topHeroesBlocks = element.all(by.css('div.module.hero'));
	searchField = element(by.id('search-box'));
	searchResult = element.all(by.css('div.search-result'));
	
	navigateTo() {
		return browser.get('/');
	}
	
	getParagraphText() {
		return this.paragraph.getText();
	}
	
	getTopHeroesTitleText() {
		return this.topHeroesTitle.getText();
	}
	
	getTopHeroesBlocksCount() {
		return this.topHeroesBlocks.count();
	}
	
	clickSearchField() {
		this.searchField.click();
	}
	
	typeInSearchField(searchText) {
		this.searchField.sendKeys(searchText);
	}

	getFirstResultText () {
		return this.searchResult.get(0).getText();
	}
}

