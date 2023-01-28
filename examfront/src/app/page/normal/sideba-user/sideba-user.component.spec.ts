import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaUserComponent } from './sideba-user.component';

describe('SidebaUserComponent', () => {
  let component: SidebaUserComponent;
  let fixture: ComponentFixture<SidebaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
