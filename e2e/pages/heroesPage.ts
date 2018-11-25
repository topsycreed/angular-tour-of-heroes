import { browser, element, by } from 'protractor';

export class HeroesPage {
	addNewHeroButton = element(by.buttonText('Add New Hero'));
	newHeroNameField = element(by.css("input[placeholder='name']"));
	saveNewHeroButton = element(by.buttonText('Save'));
	heroesPageLink = element(by.css("a[routerlink='/heroes']"));
	
	addNewHero(name) {
		this.addNewHeroButton.click();
		this.newHeroNameField.sendKeys(name);
		this.saveNewHeroButton.click();
	}
	
	getHeroByNameFromMyHeroes(name) {
		return element(by.cssContainingText('li', name));
	}
}