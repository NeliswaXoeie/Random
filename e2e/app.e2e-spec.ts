import { AngularCarsPage } from './app.po';

describe('angular-cars App', () => {
  let page: AngularCarsPage;

  beforeEach(() => {
    page = new AngularCarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
