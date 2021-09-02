import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterQueryComponent } from './router-query.component';

describe('RouterQueryComponent', () => {
  let component: RouterQueryComponent;
  let fixture: ComponentFixture<RouterQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterQueryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
