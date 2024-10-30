import { Component } from '@angular/core';
import { Escuela } from '../models/escuela';
import { EscuelaService } from '../services/escuela.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/api';

import { Table, TableModule } from 'primeng/table';



@Component({
  selector: 'app-escuela',
  standalone: true,
  imports: [SidebarComponent,CardModule,TableModule,ToolbarModule,RouterModule,ButtonModule,SplitButtonModule],
  templateUrl: './escuela.component.html',
  styleUrl: './escuela.component.css'
})
export class EscuelaComponent {
escuelas! :Escuela[];
items: MenuItem[]|undefined;

constructor (private EscuelaService: EscuelaService){}

ngOnInit(){

}
}
