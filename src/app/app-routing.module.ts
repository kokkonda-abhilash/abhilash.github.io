import { ExperiencesummaryComponent } from './experiencesummary/experiencesummary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about-me', component: AboutmeComponent},
  {path: 'experience-summary', component: ExperiencesummaryComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
