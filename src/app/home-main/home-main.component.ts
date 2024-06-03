import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectOverviewComponent } from '../project-overview/project-overview.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ProjectOverviewComponent, FormsModule],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss'
})
export class HomeMainComponent {

  testtext = '';

  send(){
    console.log(this.testtext);
    this.testtext = "";
  }
}
