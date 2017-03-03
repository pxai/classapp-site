
describe('classap homepage testing', function() {
  beforeEach(function() {
    browser.get('/');
  });

  it('should have a header title for home', function() {
    expect(element(by.css('ion-title  div')).getText()).toEqual('Home');
  });

  it('should have a home title', function() {
    expect(browser.getTitle()).toEqual('Home');
  });

  it('should have a content title for home page', function() {
    expect(element(by.css('ion-content  h2')).getText()).toEqual('Welcome to ClassApp!');
  });
});
