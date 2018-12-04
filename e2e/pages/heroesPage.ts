import { browser, element, by } from 'protractor';

export class HeroesPage {
	addNewHeroButton = element(by.buttonText('Add New Hero'));
	newHeroNameField = element(by.css("input.ng-pristine"));
	saveNewHeroButton = element(by.buttonText('Save'));
	heroesPageLink = element(by.css("a[routerlink='/heroes']"));
	
	addNewHero(name) {
		this.addNewHeroButton.click();
		this.newHeroNameField.sendKeys(name);
		this.saveNewHeroButton.click();
	}
	
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
	
	clickDeleteHero(name) {
		this.getDeleteHeroButton(name).click();
	}
	
	/**
	* Gets delete button locator for hero with specific name
	*
	* @param {string} name - name of hero
	* @return {ElementFinder} locator of delete button
	*/
	getDeleteHeroButton(name : string) : ElementFinder{
        return this.getHeroByNameFromMyHeroes(name).element(by.css('.delete-button'));
    }
}