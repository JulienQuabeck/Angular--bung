import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectOverviewComponent } from '../project-overview/project-overview.component';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ProjectOverviewComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss'
})
export class HomeMainComponent {

}
