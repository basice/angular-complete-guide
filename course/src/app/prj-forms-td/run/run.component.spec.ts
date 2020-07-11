import { async, TestBed } from '@angular/core/testing';

import { RunComponent } from './run.component';

describe('RunComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RunComponent
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(RunComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it("should have as title 'app works!'", async(() => {
    const fixture = TestBed.createComponent(RunComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(RunComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
