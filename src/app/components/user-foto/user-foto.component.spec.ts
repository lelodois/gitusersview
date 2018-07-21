import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFotoComponent } from './user-foto.component';

describe('UserFotoComponent', () => {
  let component: UserFotoComponent;
  let fixture: ComponentFixture<UserFotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
