import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JwtHandlerService } from 'src/app/services/auth/jwt-handler.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  loginForm!:FormGroup;
  isAuthenticated = false;
  userEmail:string = "";
  constructor(private authService:AuthService, private jwtService:JwtHandlerService) {
    this.authService.getAuthState().subscribe((newState) => this.isAuthenticated = newState)
  }

  ngOnInit(): void {
    if(this.isAuthenticated){
      this.userEmail = this.jwtService.getEmail()!;
    }

    this.loginForm = new FormGroup({
      email: new FormControl('', [
          Validators.required,
          Validators.email
        ]
      ),
      password: new FormControl('',[
        Validators.required,
        // Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
      ],)
    });

  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

}
