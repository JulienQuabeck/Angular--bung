import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeMainComponent } from './home-main/home-main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MotivationComponent } from './motivation/motivation.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HomeMainComponent, MotivationComponent, ImpressumComponent, DatenschutzComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'probe';
}
