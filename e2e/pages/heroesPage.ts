import { browser, element, by } from 'protractor';

export class HeroesPage {
	addNewHeroButton = element(by.buttonText('Add New Hero'));
	newHeroNameField = element(by.css("input[placeholder='name']"));
	saveNewHeroButton = element(by.buttonText('Save'));
	
	clickAddNewHeroButton() {
		this.addNewHeroButton.click();
	}
	
	inputNewHeroName(name) {
		this.newHeroNameField.sendKeys(name);
	}
	
	saveNewHero() {
		this.saveNewHeroButton.click();
	}
	
	getHeroByNameFromMyHeroes(name) {
		return element(by.cssContainingText('li', name));
	}
}