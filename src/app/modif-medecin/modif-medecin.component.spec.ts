import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifMedecinComponent } from './modif-medecin.component';

describe('ModifMedecinComponent', () => {
  let component: ModifMedecinComponent;
  let fixture: ComponentFixture<ModifMedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifMedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
