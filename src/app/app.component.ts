import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Countries } from './const/countries';
import { EmpIdValidator } from './const/empidvalidate';
import { NoSpaceValidator } from './const/noSpace';
import { CustomRegex } from './const/validate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'reactiveform';

  signUpForm! : FormGroup;
  genders : Array<string> = ['Male','Female','Others'];
  countriesArr = Countries;

  ngOnInit(): void {
    this.createSignUpForm()
  }

  createSignUpForm(){
    this.signUpForm = new FormGroup({
      userName : new FormControl(null,
        [Validators.required,Validators.minLength(4),Validators.maxLength(8),
        NoSpaceValidator.noSpace]),
      email : new FormControl(null,[Validators.required,Validators.pattern(CustomRegex.email)]),
      empId : new FormControl(null,[Validators.required,EmpIdValidator.isEmpIdValid]),
      gender : new FormControl(null),
      skills : new FormArray([new FormControl('Angular'),new FormControl('Bootstrap')]),
      currentAddress : new FormGroup({
        country : new FormControl(null),
        state : new FormControl(null),
        city : new FormControl(null),
        pincode : new FormControl(null)
      }),
      password : new FormControl(null),
      confirmpassword : new FormControl(null),
    })
  }
  onSubmit(){
    console.log(this.signUpForm)
    console.log(this.signUpForm.value)
  }
  get getusername(){
    return this.signUpForm.get('userName') as FormControl
  }
  //get all controls
  get f(){
    return this.signUpForm.controls
  }

  //arr
  get getskillsArr(){
    return this.signUpForm.get('skills') as FormArray
  }
  //addskills
  addSkills(){
    if(this.getskillsArr.length < 5){
    let skillcontrol = new FormControl(null);
    this.getskillsArr.push(skillcontrol)
  }
  else{
    alert('You can add only up to 5 skills')
  }
  }
}
