import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupRequest } from 'src/app/interfaces/signupRequest';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isSuccess!:Boolean;
  loadingSignupResult!:Boolean;
  animationSrc!:string;
  signupForm!:FormGroup;
  signupRequest!:SignupRequest;

  constructor() {
    this.signupForm = new FormGroup({
      username : new FormControl('Full Name',[
        Validators.required,
        ],
      ),
      email: new FormControl('Email', [
        Validators.required,
        Validators.email
      ]
      ),
      password: new FormControl('Password',[
        Validators.required,
        // Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
        ],),
      repeatpassword: new FormControl('Repeat Password',[
        Validators.required,
        // Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
        ],),
      tele: new FormControl('',[
        Validators.required
        ],),
      toSubscribe: new FormControl(true,[

        ],),

    })
    // this.signupForm.setValue({role : this.roles[0]})

  }

  ngOnInit(): void {
  }


  onSubmit() {
    const {repeatpassword, ...rest} = this.signupForm.value;

    console.log(rest)
    // Object.keys(this.signupForm.value)
    // .forEach(key => {
    //   if(this.signupRequest.hasOwnProperty(key)){
    //     console.log("key " + key)
    //     this.signupRequest[key as keyof SignupRequest] = this.signupForm.value[key];
    //   }
    // });

    // console.warn(this.signupRequest);
    // //signup user
    // this.authService.signup(rest).subscribe(
    //   {
    //     next: data => {
    //       console.log("data ", data );
    //       this.isSuccess = true;
    //     },
    //     error: err => this.isSuccess = false
    //   }).add(() => {
    //     this.displayCompletionAnimation();
    //   });
  }

  displayCompletionAnimation(){
    // if(this.isSuccess) this.animationSrc = "https://assets3.lottiefiles.com/packages/lf20_lk80fpsm.json";
    // else this.animationSrc = "https://assets9.lottiefiles.com/packages/lf20_q9ik4qqj.json";
    // this.loadingSignupResult = true;

    // setTimeout(()=> {
    //   this.loadingSignupResult = false;
    //   this.router.navigate(['/login'])
    //           .then(() => {
    //             window.location.reload();
    //         });
    // }, 1500);
  }

  get username (){ return this.signupForm.get('username')};
  get tele (){ return this.signupForm.get('tele')};
  get email (){ return this.signupForm.get('email')};
  get password (){ return this.signupForm.get('password')};
  get repeatpassword (){ return this.signupForm.get('repeatpassword')};
  get toSubscribe (){ return this.signupForm.get('toSubscribe')};
}
