import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEtatComponent } from './modif-etat.component';

describe('ModifEtatComponent', () => {
  let component: ModifEtatComponent;
  let fixture: ComponentFixture<ModifEtatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifEtatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifEtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
