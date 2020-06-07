import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loginForm : FormGroup;
  edit_username='';
  edit_password ='';
  edit_email='';
  edit_phone='';
  constructor(private _formBuilder: FormBuilder) {

   }

  ngOnInit(): void {
  	this.loginForm = this._formBuilder.group({
  		username: [this.edit_username, Validators.required],
  		password: [this.edit_password, Validators.required],
  		email: [this.edit_email, Validators.required],
  		phone: [this.edit_phone, Validators.required]
  	})
  }


onSubmit() {
	localStorage.setItem("loginForm", JSON.stringify(this.loginForm));
	localStorage.setItem("is_login", 'true');
	console.log(this.loginForm);
}

onEditClick() {
	let loginForm = JSON.parse(localStorage.getItem("loginForm"))
	this.edit_username = loginForm.username
	this.edit_password = loginForm.password
	this.edit_email = loginForm.edit_email
	this.edit_phone = loginForm.phone
}
}