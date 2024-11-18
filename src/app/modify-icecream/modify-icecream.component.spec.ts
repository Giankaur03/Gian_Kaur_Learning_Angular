import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyIcecreamComponent } from './modify-icecream.component';

describe('ModifyIcecreamComponent', () => {
  let component: ModifyIcecreamComponent;
  let fixture: ComponentFixture<ModifyIcecreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyIcecreamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyIcecreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
