import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/database/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = false;
  projects: Observable<any[]>;
  uid;
  constructor(private afs: AuthService,private us: UserService,private router: Router) { 
	
  }
  ngOnInit(): void {
	this.afs.authUser.subscribe(v => {
		if(v !== null) {
			this.user = true;
			this.uid = v.uid;
		}
	 });

	// this.projects = this.us.getAllProjects(this.uid);
	// this.projects.subscribe((v) => {
	// 	v.map((val: any) => {
	// 		return Object.values(val);
	// 	});
	// });

  }

  logout() {
	this.afs.logout()
	.then(res => {
		this.user = false;
		if(this.router) {
			this.router.navigate(['']);
		}
	});
  }

}
