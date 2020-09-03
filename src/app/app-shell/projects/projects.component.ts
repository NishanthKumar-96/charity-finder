import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/database/user.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Iproject } from 'src/app/service/database/interface';
import { map, switchMap, tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  user = false;
  projects: Observable<any[]>;
  uid;
  constructor(private afs: AuthService,private us: UserService) { 
	
  }

  ngOnInit(): void {
    this.afs.authUser.subscribe(v => {
      if(v !== null) {
        this.user = true;
        this.uid = v.uid;
      }
      this.projects = this.us.getAllProjects().pipe(tap(console.log));

     });
  
    }

}
