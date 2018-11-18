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

});
