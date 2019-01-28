import { Component, OnInit } from '@angular/core';
import { FormConfigService } from './../services/form-config.service';
import { HomeService } from './../shared/services/home.service';
import { Page } from './../shared/models/page.model';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	pages: Array<Page>;
	config: {
		previewMode: boolean
	}

	constructor(
		private formConfigService: FormConfigService,
		private homeService: HomeService
		) {
		this.pages = [];
	}

	ngOnInit() {
		this.config = {
			previewMode: true
		};
		this.formConfigService.setConfig(this.config);
		this.pages = this.homeService.get();
	}
}
