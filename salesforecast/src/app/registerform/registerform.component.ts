import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {

  constructor(private router : Router) { }

  registerForm:any;


  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'firstName': new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]*')]),
      'lastName': new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]*')]),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'mobileNum' : new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')])

    });
  }

  submitData(){
    // console.log(this.registerForm.value);
    if(this.registerForm.valid){
      // alert('Ty')
    }
    //<---------------------- routing failure-------------------------------->
    // nextPage(pageName :string):void{
    //   this.router.navigate(['${pageName}']);
    //   }
  }

  get firstName(){ return this.registerForm.get('firstName');}
  get lastName(){ return this.registerForm.get('lastName');}
  get email(){ return this.registerForm.get('email');}
  get mobileNum(){ return this.registerForm.get('mobileNum');}

}
