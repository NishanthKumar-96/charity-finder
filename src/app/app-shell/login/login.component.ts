import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  signUpForm: FormGroup;
  errorMsg: string;
  account = true;
  constructor(private fb: FormBuilder,private afs: AuthService) { 
      this.afs.authUser.subscribe((v) => console.log(v));
  }

  ngOnInit(): void {
    this.initializeForm();

  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]]
    });

    this.signUpForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]],
      confirm:['',[Validators.required,Validators.minLength(5)]],
    });
  }

  login() {
      const value = this.loginForm.value;
      this.afs.login(value.email,value.password)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
  }

  signUp() {
        const value = this.signUpForm.value;
        if(value.password === value.confirm) {
            this.afs.signUp(value.email,value.password,value.name)
                .then((res) => console.log('res',res))
                .catch((err) => console.log(err));
        } else {
            this.errorMsg = 'Password and Confirm PassWord must be equal';
        }
  }
  createNew() {
        if(this.account) {
            this.account = false;
        } else {
            this.account = true;
        }
  }



}
