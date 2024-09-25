import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamListItemComponent } from './icecream-list-item.component';

describe('IcecreamListItemComponent', () => {
  let component: IcecreamListItemComponent;
  let fixture: ComponentFixture<IcecreamListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcecreamListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcecreamListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
