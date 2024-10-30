import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { Facultad } from '../models/facultad';
import { FacultadService } from '../services/facultad.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@Component({
  selector: 'app-facultad',
  standalone: true,
  imports: [SidebarComponent,CardModule,TableModule,ToolbarModule,RouterModule,ButtonModule,SplitButtonModule,DialogModule,CommonModule,FormsModule,ToastModule,ConfirmDialogModule],
  templateUrl: './facultad.component.html',
  styleUrl: './facultad.component.css'
})
export class FacultadComponent {
facultades!:Facultad[];
items: MenuItem[]|undefined;
facultad!: Facultad;
facultadDialog: boolean = false;
submitted: boolean = false;
constructor(
  private facultadService: FacultadService, 
  private messageService: MessageService, 
  private confirmationService: ConfirmationService
) {}

ngOnInit(): void {
  this.loadFacultades();
}

loadFacultades(): void {
  this.facultadService.getFacultad().subscribe(
    (data) => {
      console.log('Facultades cargadas:', data);
      this.facultades = data;
    },
    (error) => {
      console.error('Error al cargar las facultades', error);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar las facultades', life: 3000 });
    }
  );
}

openNew() {
  this.facultad = { id: 0, nombre: '' };
  this.submitted = false;
  this.facultadDialog = true;
}

hideDialog() {
  this.facultadDialog = false;
  this.submitted = false;
}

saveFacultad() {
  this.submitted = true;

  if (this.facultad.nombre.trim()) {
    if (this.facultad.id) {
      // Actualizar facultad existente
      this.facultadService.updateFacultad(this.facultad).subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Facultad actualizada', life: 3000 });
        this.loadFacultades();
      });
    } else {
      // Crear nueva facultad
      this.facultadService.createFacultad(this.facultad).subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Facultad creada', life: 3000 });
        this.loadFacultades();
      });
    }

    this.facultadDialog = false;
    this.facultad = { id: 0, nombre: '' };
  }
}

editFacultad(facultad: Facultad) {
  this.facultad = { ...facultad };
  this.facultadDialog = true;
}

deleteFacultad(facultad: Facultad) {
  this.confirmationService.confirm({
    message: `¿Estás seguro de que deseas eliminar esta Facultad?`,
    header: 'Confirmar',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.facultadService.deleteFacultad(facultad.id).subscribe(
        () => {
          this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Facultad eliminada', life: 3000 });
          this.loadFacultades();
        },
        (error) => {
          console.error('Error al eliminar la facultad', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar la facultad', life: 3000 });
        }
      );
    }
  });
}
}
