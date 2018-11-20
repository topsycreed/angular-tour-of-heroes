import { DashBoardPage } from './pages/dashBoardPage';
import { HeroesPage } from './pages/heroesPage';
import { HeroDetailsPage } from './pages/heroDetalisPage';

describe('Tour of Heroes App', () => {
  const dashBoardPage: DashBoardPage;
  const heroesPage: HeroesPage;
  const heroDetalisPage: HeroDetailsPage;

  beforeEach(() => {
    dashBoardPage = new DashBoardPage();
  });
  
  it('should display message saying app works', async () => {
	await dashBoardPage.navigateTo();
    expect(await dashBoardPage.getParagraphText()).toEqual('Tour of Heroes');
  });
  
  it('should display top heroes', async () => {
	await dashBoardPage.navigateTo();
	expect(await dashBoardPage.getTopHeroesTitleText()).toEqual('Top Heroes');
  });
  
  it('should display hero detail page by top heroes', async () => {
	await dashBoardPage.navigateTo();
	expect(await dashBoardPage.getTopHeroesBlocksCount()).toBeGreaterThan(0);
  });
  
  it('should display list of heroes by search', () => {
	const searchText = 'Narco';
	  
	dashBoardPage.navigateTo();
	dashBoardPage.clickSearchField();
	dashBoardPage.typeInSearchField(searchText);
	expect(dashBoardPage.getFirstResultText()).toEqual(searchText);
  });
  
  it('should add new hero', () => {
	const heroName = 'Test';
	
	dashBoardPage.navigateTo();
	heroesPage = dashBoardPage.openHeroesPage();
	heroesPage.clickAddNewHeroButton();
	heroesPage.inputNewHeroName(heroName);
	heroesPage.saveNewHero();
	expect(heroesPage.getHeroByNameFromMyHeroes(heroName).isPresent()).toBeTruthy();
  });
});
