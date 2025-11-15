import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  inject,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BootstrapHtmlTemplate } from './../../_services/bootstrap-html-template.service';

@Component({
  selector: 'app-render-content',
  templateUrl: './render-content.component.html',
  styleUrls: ['./render-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenderContentComponent implements OnInit, OnChanges {
  @Input() content = {
    html: {},
    table: {},
  };

  private sanitizer: DomSanitizer = inject(DomSanitizer);

  public htmlToRender: SafeHtml | string = 'undefined';

  ngOnInit() {}

  ngOnChanges(): void {
    this.htmlToRender = this.renderHtml();
  }

  public renderHtml(): SafeHtml | string {
    if (typeof this.content !== 'undefined') {
      let bootstrapHtmlTemplate = new BootstrapHtmlTemplate();
      let html = bootstrapHtmlTemplate.get(this.content);
      return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    return 'undefined';
  }
}
