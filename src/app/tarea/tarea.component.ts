import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter} from 'rxjs';
import { Tarea } from '../core/tarea.interface'
import { TareaService } from '../core/tareas.service';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';
import { TareaDialogComponent } from '../tarea-dialog/tarea-dialog.component';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
  @Input()
  tarea!: Tarea;
 
  constructor(public dialog: MatDialog, private tareaSvc: TareaService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  editTarea(tareaEdit: Tarea): void {
    this.dialog.open(TareaDialogComponent, { data: tareaEdit });
  }

  deleteTarea(tarea: Tarea): void {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, { data: tarea.titulo });

    dialogRef.afterClosed().pipe(
     filter(confirm=>confirm==true)
    ).subscribe(dat=>this.deleteTareaSvc(tarea.id));
  }

  deleteTareaSvc(idTarea: number): void {
    this.tareaSvc.deleteTarea(idTarea).subscribe({
      next: dat => this._snackBar.open('Task ' + dat.titulo + ' deleted successfully.', '', { duration: 2000 }),
      error: err => this._snackBar.open(err, "", { duration: 2000 })
    });

  }
}
