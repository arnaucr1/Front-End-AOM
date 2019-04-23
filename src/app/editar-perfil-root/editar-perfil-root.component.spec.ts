import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilRootComponent } from './editar-perfil-root.component';

describe('EditarUsuarioComponent', () => {
  let component: EditarPerfilRootComponent;
  let fixture: ComponentFixture<EditarPerfilRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPerfilRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerfilRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
