import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UserService } from 'src/app/service/database/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  user = false;
  uid;
  applyForm: FormGroup;
  constructor(
     private afs: AuthService,
     private fb: FormBuilder,
     private afd: UserService,
     private router: Router
     ) { 
     
  }

  ngOnInit(): void {
      this.afs.authUser.subscribe((v) => {
         if(v !== null) {
         this.user = true;
         this.uid = v.uid;
         }
        
      });
      this.initializeForm();
  }

  initializeForm() {
     this.applyForm = this.fb.group({
         projectName:['',[Validators.required]],
         creator:['',[Validators.required]],
         description:['',[Validators.required]],
         phone:['',[Validators.required]],
         goalAmout:['',[Validators.required]],
         collected:['',[Validators.required]],
         country:['',[Validators.required]],
         imageUrl:['',[Validators.required]],
     });
  }

  applyValue() {
     const value = this.applyForm.value;
     console.log(value);
     const result = this.afd.addNewProject(value,this.uid);
     if(this.router) {
        this.router.navigate(['']);
     }
     
  }

}
