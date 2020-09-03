import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { Iproject } from './interface';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afd: AngularFireDatabase,private router: Router) { }

  addNewProject(project: Partial<Iproject>,uid: string) {
      console.log(project);
      const url = `/projects`;
      project.userId = uid;
      return this.afd.list(url).push(project)
        .then((res) => {
            console.log(res);
            if(this.router) {
                this.router.navigate(['']);
            }
        })
        .catch(err => console.log(err));
  }

  getAllProjects() {
    return this.afd.list(`projects`).snapshotChanges().pipe(map((val)=> {
      return val.map((action: SnapshotAction<any>) => {
        const $key = action.payload.key;
        const data = {$key, ...action.payload.val()};
        return data;
      });
    }));
  }

  getProject(id) {
    // return this.afd.database.ref(`projects/${id}`).on;
      
  }
}
