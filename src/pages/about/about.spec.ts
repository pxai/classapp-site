import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }               from '../../test';
import { AboutPage }          from './about';

let fixture: ComponentFixture<AboutPage> = null;
let instance: any = null;

describe('Pages: AboutPage', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([AboutPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  it('should -at least- load the about page', async(() => {
    expect(instance).toBeTruthy();
  }));
});
