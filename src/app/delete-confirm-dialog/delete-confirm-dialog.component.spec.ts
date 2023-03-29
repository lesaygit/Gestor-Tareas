import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaDeleteDialogComponent } from './delete-confirm-dialog.component';

describe('TareaDeleteDialogComponent', () => {
  let component: TareaDeleteDialogComponent;
  let fixture: ComponentFixture<TareaDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
