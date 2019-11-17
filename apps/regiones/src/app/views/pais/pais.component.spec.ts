import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UiModule } from 'libs/shared/ui/src/lib/ui.module';
import { PaisComponent } from './pais.component';


describe('GIVEN: an IndexComponent declared in AppModule', () => {

 describe('WHEN: the IndexComponent is compiled', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule, UiModule],
    declarations: [PaisComponent]
    }).compileComponents();
  }

  ));

  it('THEN: should create the component', () => {
    const fixture = TestBed.createComponent(PaisComponent);
    const index = fixture.debugElement.componentInstance;
    expect(index).toBeTruthy();
  });

  it(`THEN: when rendering load at least one region`, () => {
    const fixture = TestBed.createComponent(PaisComponent);
    const compiled = fixture.debugElement.nativeElement;
    const cardTitle = compiled.querySelectorAll('.card');
    fixture.detectChanges();

    expect(cardTitle.length).toBeLessThan(1);
  });

  it(`THEN: when rendering the exist a button`, () => {
    const fixture = TestBed.createComponent(PaisComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBeLessThan(1);
  });
 });
});
