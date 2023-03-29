import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaDialogComponent } from './tarea-dialog.component';

describe('TareaDialogComponent', () => {
  let component: TareaDialogComponent;
  let fixture: ComponentFixture<TareaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
