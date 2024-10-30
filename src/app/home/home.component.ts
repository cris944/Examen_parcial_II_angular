import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent,CardModule,ToolbarModule,RouterModule,ButtonModule,SplitButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
items: MenuItem[]|undefined;

}
