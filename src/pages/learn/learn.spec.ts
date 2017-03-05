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

  it('should have a list of ClassApps', async(() => {
    expect(instance.classApps).toBeDefined();
  }));

  it('should add an element to the list of ClassApps', async(() => {
    let classApp = {"_id": "666", "name": "Learn Karma Testing","description":"First course to understand Karma","note":"Check this out","image": "", "tags":["Karma","Ionic2"],
      "tips":[]};
    let expected = instance.classApps.length + 1;
    instance.addClassApp(instance.classApps[0]);
    expect(instance.classApps.length).toBe(expected);
  }));

  it('should delete an element from the list of ClassApps', async(() => {
    let expected = instance.classApps.length - 1;
    instance.deleteClassApp(instance.classApps[0]);
    expect(instance.classApps.length).toBe(expected);
  }));
});
