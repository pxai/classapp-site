import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }               from '../../test';
import { TeachPage }          from './teach';

let fixture: ComponentFixture<TeachPage> = null;
let instance: any = null;

describe('Pages: HelloIonic', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([TeachPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  it('should load the teach page', async(() => {
    expect(instance).toBeTruthy();
  }));
});
