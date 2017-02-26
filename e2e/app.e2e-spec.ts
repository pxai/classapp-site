import { browser, element, by } from 'protractor';

describe('ClassApp', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('MyApp');
  });
})
