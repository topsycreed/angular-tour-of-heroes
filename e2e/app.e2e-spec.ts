import { browser, element, by } from 'protractor';
import { DashBoardPage } from './pages/dashBoardPage';
import { HeroesPage } from './pages/heroesPage';
import { HeroDetailsPage } from './pages/heroDetalisPage';

describe('Tour of Heroes App', () => {
  const dashBoardPage: DashBoardPage;
  const heroesPage: HeroesPage;
  const heroDetalisPage: HeroDetailsPage;
  const until = protractor.ExpectedConditions;

  beforeEach(() => {
    dashBoardPage = new DashBoardPage();
  });
  
  it('should display message saying app works', async () => { 
	await dashBoardPage.navigateTo();
    expect(await dashBoardPage.getParagraphText()).toEqual('Tour of Heroes');
  });
  
  it('should display top heroes title', async () => {
	await dashBoardPage.navigateTo();
	expect(await dashBoardPage.getTopHeroesTitleText()).toEqual('Top Heroes');
  });
  
  it('should display hero detail page by top heroes', async () => {
	await dashBoardPage.navigateTo();
	expect(await dashBoardPage.getTopHeroesBlocksCount()).toBeGreaterThan(0);
  });
  
  it('should display top heroes blocks', async () => {
	const heroNames = ["Narco", "Bombasto", "Celeritas", "Magneta"];
	  
	await dashBoardPage.navigateTo();
	expect(await dashBoardPage.getTopHeroesNames()).toEqual(heroNames);
  });
  
  it('should redirect to dashboard', async () => {
    dashBoardPage.navigateTo();
    const url = await browser.getCurrentUrl();
    expect(url).toContain('/dashboard');
  });
  
  it('should display list of heroes by search', async () => {
	const searchText = 'Narco';
	  
	await dashBoardPage.navigateTo();
	await dashBoardPage.clickSearchField();
	await dashBoardPage.typeInSearchField(searchText);
	await browser.wait(until.presenceOf(dashBoardPage.searchResult), 5000, 'Element taking too long to appear in the DOM');
	expect(await dashBoardPage.getFirstResultText()).toEqual(searchText);
  });
  
  it('should add new hero', async () => {
	const heroName = 'Test';
	
	await dashBoardPage.navigateTo();
	heroesPage = await dashBoardPage.openHeroesPage();
	await browser.wait(until.presenceOf(heroesPage.addNewHeroButton), 5000, 'Element taking too long to appear in the DOM');
	heroesPage.clickAddNewHeroButton();
	await browser.wait(until.presenceOf(heroesPage.newHeroNameField), 5000, 'Element taking too long to appear in the DOM');
	await heroesPage.inputNewHeroName(heroName);
	await browser.wait(until.presenceOf(heroesPage.saveNewHeroButton), 5000, 'Element taking too long to appear in the DOM');
	await heroesPage.saveNewHero();
	expect(await heroesPage.getHeroByNameFromMyHeroes(heroName).isPresent()).toBeTruthy();
  });
  
  it('should delete existing hero', async () => {
    const existingHeroName = "Narco";

	await dashBoardPage.navigateTo();
    heroesPage = await dashBoardPage.openHeroesPage();
    await heroesPage.clickDeleteHero(existingHeroName);

    expect(await heroesPage.getHeroByNameFromMyHeroes(existingHeroName).isPresent()).toBeFalsy();
  });
});