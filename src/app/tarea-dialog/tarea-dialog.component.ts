import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TareaService } from '../core/tareas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerService } from '../core/spinner-service/spinner.service';
import { finalize, Subscription } from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from '../core/tarea.interface';
import { TareaStatus } from '../core/tarea-status.enum';


@Component({
  selector: 'app-tarea-dialog',
  templateUrl: './tarea-dialog.component.html',
  styleUrls: ['./tarea-dialog.component.scss']
})

export class TareaDialogComponent implements OnInit, OnDestroy {

  public formTarea!: FormGroup;
  private subscription!: Subscription;
  estadoTareas = Object.values(TareaStatus);

  constructor(private formBuild: FormBuilder,
    private tareaSvc: TareaService,
    private _snackBar: MatSnackBar,
    private spinner: SpinnerService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public tareaEdit: Tarea
  ) { }

  ngOnInit(): void {

    this.formTarea = this.formBuild.group({
      titulo: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-zA-Z 0-9.]+$/)]],
      description: ['', Validators.maxLength(250)],
      status: ['']
    });

    if (this.tareaEdit) { }
    this.formTarea.patchValue(this.tareaEdit);

  }

  ngOnDestroy(): void {

    if (this.subscription === undefined)
      return;

    this.subscription.unsubscribe();

  }

  crearTarea(): void {
    this.spinner.activeSpinner();
    this.subscription = this.tareaSvc.addTarea$(this.formTarea.value).pipe(
      finalize(() => this.spinner.desactiveSpinner()))
      .subscribe({
        next: dat => this._snackBar.open(dat.titulo, "se a añadido...", { duration: 2000 }),
        error: err => this._snackBar.open(err, "", { duration: 2000 }),
        complete: () => this.formTarea.reset({ titulo: '', description: ''})
      });

  }

  editarTarea(): void {
    this.subscription = this.tareaSvc.editTarea$(this.getTareaReadyToSave(this.tareaEdit.id))
      .subscribe({
        next: dat => this._snackBar.open('Task updated successfully.', '', { duration: 2000 }),
        error: err => this._snackBar.open(err, "", { duration: 2000 }),
        complete: () => { this.dialog.closeAll(); }
      });
  }

  private getTareaReadyToSave(oldTareaId: number): Tarea {
    return {
      id: oldTareaId,
      ...this.formTarea.value
    } as Tarea;
  }

}