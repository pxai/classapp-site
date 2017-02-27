import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }               from '../../test';
import { ContactPage }          from './contact';

let fixture: ComponentFixture<ContactPage> = null;
let instance: any = null;

describe('Pages: ContactPage', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([ContactPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  it('should -at least- load the contact page', async(() => {
    expect(instance).toBeTruthy();
  }));
});
