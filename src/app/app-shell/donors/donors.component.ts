import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
 
@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {
  userName;
  constructor(private afs: AuthService) { }

  ngOnInit(): void {
    this.afs.authUser.subscribe(v => {
      this.userName = v.displayName; 
    });

  }

}
