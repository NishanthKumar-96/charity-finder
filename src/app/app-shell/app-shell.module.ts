import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellRoutingModule } from './app-shell-routing.module';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProjectsComponent } from './projects/projects.component';
import { MatCardModule } from '@angular/material/card';
import { ApplyComponent } from './apply/apply.component';
import { LoginComponent } from './login/login.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service';
import { DonorsComponent } from './donors/donors.component';
import { UserService } from '../service/database/user.service';


@NgModule({
  declarations: [HomeComponent, ProjectsComponent, ApplyComponent, LoginComponent, ProjectDetailsComponent, DonorsComponent],
  imports: [
    CommonModule,
    AppShellRoutingModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers:[AuthService,UserService]
})
export class AppShellModule { }
