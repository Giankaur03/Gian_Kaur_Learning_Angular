import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyIcecreamItemComponent } from './modify-icecream-item.component';

describe('ModifyIcecreamItemComponent', () => {
  let component: ModifyIcecreamItemComponent;
  let fixture: ComponentFixture<ModifyIcecreamItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyIcecreamItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyIcecreamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
