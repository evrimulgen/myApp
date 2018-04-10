import { YoGemsPage } from './app.po';

describe('yo-gems App', () => {
  let page: YoGemsPage;

  beforeEach(() => {
    page = new YoGemsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
