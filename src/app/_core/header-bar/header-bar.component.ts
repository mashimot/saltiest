import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guards/auth.service';
import { User } from '../guards/user.model';

@Component({
	selector: 'app-header-bar',
	templateUrl: './header-bar.component.html',
	styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
	constructor(
		private authService: AuthService
	) { }

	ngOnInit() {
	}

	onLogout(){
		this.authService.logout();
	}

	get isUserLoggedIn(){
		return this.authService.currentUserValue;
	}
}
