import { browser, element, by } from 'protractor';
import { HeroesPage } from './heroesPage';

export class DashBoardPage {
	paragraph = element(by.css('my-root h1'));
	topHeroesTitle = element(by.css('my-dashboard h3'));
	topHeroesBlocks = element.all(by.css('.module.hero'));
	searchField = element(by.id('search-box'));
	searchResult = element.all(by.css('div.search-result'));
	heroesPageLink = element(by.css("a[routerlink='/heroes']"));
	
	navigateTo() {
		return browser.get('/');
	}
	
	getParagraphText() {
		return this.paragraph.getText();
	}
	
	getTopHeroesTitleText() {
		return this.topHeroesTitle.getText();
	}
	
	getTopHeroes() {
		return this.topHeroesBlocks;
	}
	
	getTopHeroesBlocksCount() {
		return this.getTopHeroes().count();
	}
	
	getTopHeroesNames() {
		return this.getTopHeroes().map<string>(elem => elem.getText());
	}
	
	/*getTopHeroesNames(): Promise<string[]> {
		const elem: ElementArrayFinder = this.topHeroesBlocks;
		let promisedHeroes = elem.map<string>(elem => elem.getText());
		return <Promise<any>> Promise.all(promisedHeroes);
	}*/
	
	clickSearchField() {
		this.searchField.click();
	}
	
	typeInSearchField(searchText) {
		this.searchField.sendKeys(searchText);
	}

	getFirstResultText () {
		return this.searchResult.get(0).getText();
	}
	
	openHeroesPage(): HeroesPage {
		this.heroesPageLink.click();
		return new HeroesPage();
	}
}

