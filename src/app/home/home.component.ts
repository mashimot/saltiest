import { Component, OnInit } from '@angular/core';
import { FormConfigService } from './../services/form-config.service';
import { HomeService } from './../shared/services/home.service';
import { Page } from './../core/model';
import { PageService } from '../shared/services/page.service';

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
		private homeService: HomeService,
		private pageService: PageService
		) {
		this.pages = [];
	}

	ngOnInit() {
		this.config = {
			previewMode: true
		};
		this.formConfigService.setConfig(this.config);
		this.pages = this.homeService.getHomeStatic();
		/*this.pageService.getPageByProjectId(14)
		.subscribe(result => { 
			console.log(result);
			if(result.success){
				this.pages = result.data;
			}
		});*/
	}
}
