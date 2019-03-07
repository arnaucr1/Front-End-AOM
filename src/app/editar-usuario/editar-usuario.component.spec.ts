import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUserComponent } from './editar-usuario.component';

describe('EditarUsuarioComponent', () => {
  let component: EditarUserComponent;
  let fixture: ComponentFixture<EditarUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
