
describe('classap learn page testing', function() {

  beforeEach(function() {
    browser.get('');
    element(by.xpath('//*[@id="tab-t0-3"]/ion-icon')).click();
    browser.waitForAngular();
       });

  it('should have a header title for learn', function() {
   // expect(element(by.css('ion-title div')).getText()).toEqual('About');
  });

  it('should have an learn title', function() {
    expect(browser.getTitle()).toEqual('Learn');
  })


  it('should have a content title for learn', function() {
    expect(element(by.css('ion-tab[tabtitle="Learn"] ion-title div')).getText()).toEqual('Learn');
  });

  it('should have a list with learn items', function() {
    expect(element(by.css('ion-list')).isPresent()).toBeTruthy();
  });

});
