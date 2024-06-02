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
    },
    {
      id: 3,
      img: '/assets/img/join.png',
      title: 'Join',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
  ];
}
