import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/database/user.service';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  user = false;
  id;
  project: Observable<any>;
  constructor(
      private afs: AuthService,
      private route: ActivatedRoute,
      private us: UserService
      ) { }

  ngOnInit(): void {
    const snapshot = this.route.snapshot;
    this.id = snapshot.params['id'];
    console.log(this.id);
    this.afs.authUser.subscribe((v) => {
      if(v !== null) {
      this.user = true;
      }
      const obj = {}
      // this.project = this.us.getProject(this.id)
   });
  }

}
