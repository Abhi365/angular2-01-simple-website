import { Angular01SimpleWebsitePage } from './app.po';

describe('angular01-simple-website App', () => {
  let page: Angular01SimpleWebsitePage;

  beforeEach(() => {
    page = new Angular01SimpleWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
