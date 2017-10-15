import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { ProjectService } from './service/project.service';

import { RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
