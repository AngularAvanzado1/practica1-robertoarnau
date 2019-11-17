
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IndexComponent } from './index.component';
import { UiModule } from 'libs/shared/ui/src/lib/ui.module';


describe('GIVEN: an IndexComponent declared in AppModule', () => {
 describe('WHEN: the IndexComponent is compiled', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule, UiModule],
    declarations: [IndexComponent]
    }).compileComponents();
  }));

  it('THEN: should create the component', () => {
    const fixture = TestBed.createComponent(IndexComponent);
    const index = fixture.debugElement.componentInstance;
    expect(index).toBeTruthy();
  });

  it(`THEN: should have a h1 with value "Listado de Regiones"`, () => {
    const fixture = TestBed.createComponent(IndexComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Listado de Regiones');
  });

  it(`THEN: when rendering load at least one region`, () => {
    const fixture = TestBed.createComponent(IndexComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.card').length).toBeLessThan(1);
  });
 });
});
