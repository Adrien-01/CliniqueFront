import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifSpecialiteComponent } from './modif-specialite.component';

describe('ModifSpecialiteComponent', () => {
  let component: ModifSpecialiteComponent;
  let fixture: ComponentFixture<ModifSpecialiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifSpecialiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
