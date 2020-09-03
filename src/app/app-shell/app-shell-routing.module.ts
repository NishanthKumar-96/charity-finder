import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ApplyComponent } from './apply/apply.component';
import { LoginComponent } from './login/login.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [
    {
      path:'',
      component:HomeComponent,
      children:[
          { path:'',component:ProjectsComponent },
          { path:'apply',component: ApplyComponent},
          { path:'login',component: LoginComponent},
          { path:'project-details/:id',component: ProjectDetailsComponent}

      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppShellRoutingModule { }
