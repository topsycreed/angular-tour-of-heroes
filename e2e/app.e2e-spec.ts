import { browser, element, by } from 'protractor';
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
});