import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_core/guards/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	submitted: boolean = false;
	email: string = 'test';
	password: string = 'test';
	error: string;

	constructor(
		private fb: FormBuilder,
		private authService: AuthService
	) { }

	ngOnInit() {
		this.loginForm = this.fb.group({
			username: [
				this.email, [
				Validators.required,
				//Validators.email
			]],
			password: [
				this.password, [
					Validators.required
				]
			]
		});
	}

	onSubmit(){
		this.submitted = true;
		this.authService.login(this.loginForm.value).subscribe(
			result => {},
			error => {
				this.error = error;
			}
		);
	}

	get f() { return this.loginForm.controls; }

}
