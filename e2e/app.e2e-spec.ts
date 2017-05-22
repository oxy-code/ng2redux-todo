import { ReduxTodoPage } from './app.po';

describe('redux-todo App', () => {
  let page: ReduxTodoPage;

  beforeEach(() => {
    page = new ReduxTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
