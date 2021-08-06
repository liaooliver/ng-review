import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IntroductComponent } from './introduct.component';

describe('IntroductComponent', () => {
  let component: IntroductComponent;
  let fixture: ComponentFixture<IntroductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show Content', () => {
    const headHtml = fixture.nativeElement.querySelector('.head');
    const showHtml = fixture.nativeElement.querySelector('.detail');
    expect(headHtml.textContent).toEqual('introduct works!');
    expect(showHtml).toBeNull()
    expect(component.isOpen).toBeFalsy();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.isOpen).toEqual(true);
    fixture.detectChanges()
    expect(showHtml).toBeTruthy();

  })
});
