import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogScreenUpdateProductComponent } from './dialog-screen-update-product.component';

describe('DialogScreenUpdateProductComponent', () => {
  let component: DialogScreenUpdateProductComponent;
  let fixture: ComponentFixture<DialogScreenUpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogScreenUpdateProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogScreenUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
