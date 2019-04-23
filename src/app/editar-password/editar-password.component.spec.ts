import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPasswordComponent } from './editar-password.component';

describe('EditarSubscripcionComponent', () => {
  let component: EditarPasswordComponent;
  let fixture: ComponentFixture<EditarPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
