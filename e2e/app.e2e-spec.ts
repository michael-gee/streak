import { StreakPage } from './app.po';

describe('streak App', () => {
  let page: StreakPage;

  beforeEach(() => {
    page = new StreakPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
