import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { FooterComponent } from './footer/footer.component';
import { TareaService } from './core/tareas.service';
import { TareaComponent } from './tarea/tarea.component';
import { PizarraComponent } from './pizarra/pizarra.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarTareasComponent } from './listar-tareas/listar-tareas.component';
import { AboutComponent } from './about/about.component';
import { TareaDialogComponent } from './tarea-dialog/tarea-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner-component/spinner.component';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FooterComponent,
    TareaComponent,
    PizarraComponent,
    ListarTareasComponent,
    AboutComponent,
    TareaDialogComponent,
    SpinnerComponent,
    DeleteConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TareaService],
  bootstrap: [AppComponent],
})
export class AppModule { }
