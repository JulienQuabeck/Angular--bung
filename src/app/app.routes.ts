import { Routes } from '@angular/router';
import { HomeMainComponent } from './home-main/home-main.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { MotivationComponent } from './motivation/motivation.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';

export const routes: Routes = [
    {path: '', component: HomeMainComponent},
    {path: 'home', component: HomeMainComponent},
    {path: 'projects', component: ProjectOverviewComponent},
    {path: 'motivation', component: MotivationComponent},
    {path: 'impressum', component: ImpressumComponent},
    { path: 'datenschutz', component: DatenschutzComponent},
];
