
describe('classap homepage testing', function() {
  it('should have a header title for home', function() {
    browser.get('/');
    expect(element(by.css('ion-title  div')).getText()).toEqual('Home');
  });

  it('should have a home title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Home');
  });

  it('should have a content title for home page', function() {
    browser.get('/');
    expect(element(by.css('ion-content  h2')).getText()).toEqual('Welcome to ClassApp!');
  });
});
