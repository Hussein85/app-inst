import { AppInstPage } from './app.po';

describe('app-inst App', function() {
  let page: AppInstPage;

  beforeEach(() => {
    page = new AppInstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
