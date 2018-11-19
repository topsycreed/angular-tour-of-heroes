import { DashBoardPage } from './pages/dashBoardPage';
import { HeroesPage } from './pages/heroesPage';
import { HeroDetailsPage } from './pages/heroDetalisPage';

describe('Tour of Heroes App', () => {
  let dashBoardPage: DashBoardPage;
  let heroesPage: HeroesPage;
  let heroDetalisPage: HeroDetailsPage;

  beforeEach(() => {
    dashBoardPage = new DashBoardPage();
  });

  it('should display message saying app works', () => {
    dashBoardPage.navigateTo();
    expect(dashBoardPage.getParagraphText()).toEqual('Tour of Heroes');
  });
  
  it('should display top heroes', () => {
	dashBoardPage.navigateTo();
	expect(dashBoardPage.getTopHeroesTitleText()).toEqual('Top Heroes');
  });
  
  it('should display hero detail page by top heroes', () => {
	dashBoardPage.navigateTo();
	expect(dashBoardPage.getTopHeroesBlocksCount()).toBeGreaterThan(0);
  });
  
  it('should display list of heroes by search', () => {
	let searchText = 'Narco';
	  
	dashBoardPage.navigateTo();
	dashBoardPage.clickSearchField();
	dashBoardPage.typeInSearchField(searchText);
	expect(dashBoardPage.getFirstResultText()).toEqual(searchText);
  });
});
