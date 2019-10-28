import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperiencesummaryComponent } from './experiencesummary/experiencesummary.component';
import { TechnologyStackComponent } from './technology-stack/technology-stack.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DownloadresumeService } from './downloadresume.service';
import { HttpClientModule } from '@angular/common/http';
import { CertificationsComponent } from './certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    NavbarComponent,
    ExperiencesummaryComponent,
    TechnologyStackComponent,
    CertificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    DownloadresumeService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    TechnologyStackComponent
  ]
})
export class AppModule { }
