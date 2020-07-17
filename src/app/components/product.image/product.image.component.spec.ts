import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product.ImageComponent } from './product.image.component';

describe('Product.ImageComponent', () => {
  let component: Product.ImageComponent;
  let fixture: ComponentFixture<Product.ImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product.ImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product.ImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
