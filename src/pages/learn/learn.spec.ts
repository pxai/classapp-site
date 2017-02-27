import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }               from '../../test';
import { LearnPage }          from './learn';

let fixture: ComponentFixture<LearnPage> = null;
let instance: any = null;

describe('Pages: LearnPage', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([LearnPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  it('should -at least- load the learn page', async(() => {
    expect(instance).toBeTruthy();
  }));
});
