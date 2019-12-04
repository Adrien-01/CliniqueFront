import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifOperationComponent } from './modif-operation.component';

describe('ModifOperationComponent', () => {
  let component: ModifOperationComponent;
  let fixture: ComponentFixture<ModifOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
