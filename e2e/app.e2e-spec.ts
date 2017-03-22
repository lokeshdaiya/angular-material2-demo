import { MyMaterialProjectPage } from './app.po';

describe('my-material-project App', () => {
  let page: MyMaterialProjectPage;

  beforeEach(() => {
    page = new MyMaterialProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
