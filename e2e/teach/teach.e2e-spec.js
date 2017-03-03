
describe('classap teach page testing', function() {

  beforeEach(function() {
    browser.get('');
    element(by.xpath('//*[@id="tab-t0-4"]/ion-icon')).click();
       });

  it('should have a header title for teach', function() {
   // expect(element(by.css('ion-title div')).getText()).toEqual('About');
  });

  it('should have an teach title', function() {
    expect(browser.getTitle()).toEqual('Teach');
  })


  it('should have a content title for teach', function() {
    expect(element(by.css('ion-tab[tabtitle="Teach"] ion-title div')).getText()).toEqual('Teach');
  });

});
