import { Component } from '@angular/core';

@Component({
  selector: 'app-project-overview',
  standalone: true,
  imports: [],
  templateUrl: './project-overview.component.html',
  styleUrl: './project-overview.component.scss'
})
export class ProjectOverviewComponent {
  projects = [
    {
      id: 1,
      img: '/assets/img/sakura.png',
      title: 'Sakura Ramen',
      description: 'Beschreibung Sakura'
    },
    {
      id: 2,
      img: '/assets/img/el_pollo_loco.png',
      title: 'El Pollo Loco',
      description: 'Beschreibung El Pollo Loco'
    }
  ];
}
