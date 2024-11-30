import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsTabComponent } from './user-details-tab.component';

describe('UserDetailsTabComponent', () => {
  let component: UserDetailsTabComponent;
  let fixture: ComponentFixture<UserDetailsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
