import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormConfigService } from './../../_services/form-config.service';
import { BootstrapHtmlTemplate } from '../../_services/bootstrap-html-template.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormConfigComponent } from './../../form-builder/form-config/form-config.component';
import { Content } from 'src/app/_core/model';

@Component({
  selector: 'app-form-contents',
  templateUrl: './form-contents.component.html',
  styleUrls: ['./form-contents.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormContentsComponent implements OnInit {
  showOptions: boolean;
  config: {
    previewMode: boolean;
  };
  options: any = {
    size: 'lg',
    backdrop: 'static',
    keyboard: false,
    centered: true,
  };

  @Input() column;
  @Input() pageIndex: number;
  @Input() rowIndex: number;
  @Input() columnIndex: number;

  @Input() pageId: number;
  @Input() rowId: number;
  @Input() columnId: number;

  constructor(
    private formConfigService: FormConfigService,
    private modalService: NgbModal,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.showOptions = false;
    this.formConfigService.getConfig().subscribe(data => {
      this.config = data;
      this.cd.markForCheck();
    });
  }

  copyHtml(content): void {
    let bootstrapHtmlTemplate = new BootstrapHtmlTemplate();
    let code = bootstrapHtmlTemplate.get(content);
    this.copyToClipboard(code);
  }

  copyToClipboard(text) {
    if ((<any>window).clipboardData && (<any>window).clipboardData.setData) {
      // IE specific code path to prevent textarea being shown while dialog is visible.
      return (<any>window).clipboardData.setData('Text', text);
    } else if (
      document.queryCommandSupported &&
      document.queryCommandSupported('copy')
    ) {
      var textarea = document.createElement('textarea');
      textarea.textContent = text;
      textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in MS Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand('copy'); // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn('Copy to clipboard failed.', ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }

  sendDataToModal(contents: Content[], index: number): void {
    const modal = this.modalService.open(FormConfigComponent, this.options);
    modal.componentInstance.content_id = contents[index].id;
    modal.componentInstance.content = contents[index];
    modal.componentInstance.emitData.subscribe($e => {
      contents[index] = $e;
      this.cd.markForCheck();
    });
  }

  deleteContent(contentIndex: number, content = { id: null }): void {
    this.column.contents.splice(contentIndex, 1);
  }
}
