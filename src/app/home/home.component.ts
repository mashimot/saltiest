import { Component, OnInit } from '@angular/core';
import { FormConfigService } from './../_services/form-config.service';
import { HomeService } from './../shared/services/home.service';
import { Page } from './../_core/model';
import { PageService } from '../shared/services/page.service';
import { Observable } from 'rxjs';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	pages$: Observable<Page[]>;
	config: {
		previewMode: boolean
	}

	constructor(
		private formConfigService: FormConfigService,
		private homeService: HomeService
	) {
	}

	ngOnInit() {
		this.config = {
			previewMode: true
		};
		this.formConfigService.setConfig(this.config);
		this.pages$ = this.homeService.getHome();
	}
}
