import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }               from '../../test';
import { HomePage }          from './home';

let fixture: ComponentFixture<HomePage> = null;
let instance: any = null;

describe('Pages: HomePage', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([HomePage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  it('should -at least- load the home page', async(() => {
    expect(instance).toBeTruthy();
  }));
});
