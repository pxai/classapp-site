var EC = protractor.ExpectedConditions;
describe('classap about page testing', function() {

  beforeEach(function() {
    browser.get('');
    element(by.xpath('//*[@id="tab-t0-1"]/ion-icon')).click();
    browser.waitForAngular();
       });

  it('should have a header title for about', function() {
   // expect(element(by.css('ion-title div')).getText()).toEqual('About');
  });

  it('should have an about title', function() {
    expect(browser.getTitle()).toEqual('About');
  })


  it('should have a content title', function() {
    expect(element(by.css('ion-tab[tabtitle="About"] ion-title div')).getText()).toEqual('About');
  });

});
