import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaologScreenTemplateComponent } from './diaolog-screen-template.component';

describe('DiaologScreenTemplateComponent', () => {
  let component: DiaologScreenTemplateComponent;
  let fixture: ComponentFixture<DiaologScreenTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiaologScreenTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaologScreenTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
