import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Observable, Subscription } from 'rxjs';
import { Page } from '../_core/model';
import { BootstrapHtmlTemplate } from '../_services/bootstrap-html-template.service';
import { FormConfigService } from './../_services/form-config.service';

@Component({
  selector: 'app-form-pages',
  templateUrl: './form-pages.component.html',
  styleUrls: ['./form-pages.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormPagesComponent implements OnInit {
  @Input() pages;
  @Output() pagesChange = new EventEmitter();

  pages$: Observable<Page[]>;
  config: {
    previewMode: boolean;
  };
  project_id: number;
  subs = new Subscription();

  private dropModelPageUpdated = false;

  constructor(
    private formConfigService: FormConfigService,
    private dragulaService: DragulaService,
    private cd: ChangeDetectorRef
  ) {
    this.initDragAndDrop();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if (changes.pages) {
    }
  }

  ngOnInit() {
    this.formConfigService.getConfig().subscribe(data => {
      this.config = { ...data };
    });
  }

  ngAfterViewInit() {
    this.subs.add(
      this.dragulaService
        .dropModel('pages')
        .subscribe(({ name, el, target, source, item, sourceModel, targetModel, sourceIndex, targetIndex }) => {
          this.dropModelPageUpdated = true;
        })
    );
  }

  ngAfterContentChecked() {
    this.cd.detectChanges();
  }

  ngDoCheck() {
    if (this.dropModelPageUpdated) {
      // this excutes if this.dropModelUpdated is true only
      this.pagesChange.emit(this.pages);
    }
  }

  ngOnDestroy() {
    this.dragulaService.destroy('pages');
    this.dragulaService.destroy('contents');
    this.dragulaService.destroy('columns');
    this.dragulaService.destroy('rowSortable');
    this.dragulaService.destroy('sortableElements');
    this.subs.unsubscribe();
  }

  public deletePage(pageIndex: number) {
    this.pages.splice(pageIndex, 1);
    this.pagesChange.emit(this.pages);
    this.cd.detectChanges();
  }

  public initDragAndDrop() {
    this.dragulaService.createGroup('pages', {
      copy: (el, source) => {
        return source.className === 'menu-page-sortable';
      },
      copyItem: el => {
        return el;
      },
      accepts: (el, target, source, sibling) => {
        return target.className !== 'menu-page-sortable';
      },
      moves: (el, container, handle) => {
        if (handle.classList) {
          return handle.classList.contains('page-handle');
        }
        return false;
      }
    });

    this.dragulaService.createGroup('columns', {
      accepts: (el, target, source, sibling) => {
        const currRowIndex = el.getAttribute('data-current-row-index');
        const currPageIndex = el.getAttribute('data-current-page-index');
        const currentClass = 'page-' + currPageIndex + '_row-' + currRowIndex;
        return target.classList.contains(currentClass);
      },
      moves: (el, container, handle) => {
        //let currColumnIndex = handle.getAttribute('data-current-column-index');
        if (handle.classList) {
          return handle.classList.contains('column-handle');
        }
        return false;
      }
    });

    this.subs.add(
      this.dragulaService
        .dropModel('columns')
        .subscribe(({ name, el, target, source, item, sourceModel, targetModel, sourceIndex, targetIndex }) => {
          const currRowIndex = el.getAttribute('data-current-row-index');
          const pageIndex = el.getAttribute('data-current-page-index');
          const currRowId = target.getAttribute('data-current-row-id');
          if (pageIndex != null && currRowIndex != null) {
            const gridArr = this.pages[pageIndex].rows[currRowIndex].grid.split(' ');
            const aux = gridArr[sourceIndex];

            gridArr.splice(sourceIndex, 1);
            gridArr.splice(targetIndex, 0, aux);
            const newGrid = gridArr.join(' ').trim();
            this.pages[pageIndex].rows[currRowIndex].grid = newGrid;
          }
        })
    );

    this.dragulaService.createGroup('rowSortable', {
      copy: (el, source) => {
        return source.className === 'menu-row-sortable';
      },
      copyItem: el => {
        return JSON.parse(JSON.stringify(el));
      },
      accepts: (el, target, source, sibling) => {
        // To avoid draggin from right to left container
        if (target.className !== 'menu-row-sortable') {
          return true;
        }
        return false;
      },
      moves: (el, container, handle) => {
        if (handle.classList) {
          return handle.classList.contains('row-handle');
        }
        return false;
      }
    });

    this.subs.add(
      this.dragulaService
        .dropModel('rowSortable')
        .subscribe(({ name, el, target, source, item, sourceModel, targetModel, sourceIndex, targetIndex }) => {
          const targetPageId = target.getAttribute('data-current-page-id');
          const currRowId = el.getAttribute('data-current-row-id');
          console.log('item.grid', item.grid);
          if (typeof item.grid != 'undefined' && typeof item.columns == 'undefined') {
            const gridsArray = item.grid.trim().split('\n');
            delete item.grid;
            const rows = gridsArray
              .map(line => {
                return line.replace(/\s+/g, ' ').trim();
              })
              .filter(line => line)
              .map(line => {
                const arrNumbers = line.split(' ');
                const columns = [];

                if (arrNumbers.length > 0) {
                  for (let j = 0; j < arrNumbers.length; j++) {
                    columns.push({
                      contents: []
                    });
                  }
                }

                return {
                  grid: line,
                  columns: columns
                };
              });

            console.log('targetModel', targetModel, 'sourceModel', sourceModel, 'targetIndex', targetIndex);
            targetModel.splice(targetIndex, 1);
            //targetIndex: Position
            const totalOfRowsDragged = rows.length;
            for (let i = 0; i < totalOfRowsDragged; i++) {
              targetModel.splice(targetIndex + i, 0, rows[i]);
            }
          } else {
            const params = {
              project_id: this.project_id,
              page: {
                currRowId: parseInt(currRowId),
                targetPageId: parseInt(targetPageId)
              },
              rowPos: targetModel.map(item => {
                return item.id ? item.id : null;
              })
            };
          }
          return item;
        })
    );

    this.dragulaService.createGroup('contents', {
      copy: (el, source) => {
        return source.classList.contains('menu-content-sortable');
      },
      copyItem: el => {
        console.log(el);
        return JSON.parse(JSON.stringify(el));
      },
      accepts: (el, target, source, sibling) => {
        // To avoid dragging from right to left container
        return !target.classList.contains('menu-content-sortable');
      },
      moves: (el, container, handle) => {
        if (handle.classList) {
          return handle.classList.contains('content-handle');
        }
        return false;
      }
    });

    this.subs.add(
      this.dragulaService.cloned('contents').subscribe(({ name, clone, original, cloneType }) => {
        if (original.classList.contains('menu-content-sortable')) {
          const currentDataAttr = JSON.parse(original.getAttribute('data-content'));
          const r = new BootstrapHtmlTemplate();
          clone.classList.remove('badge', 'bg-dark', 'col-md-6', 'bg-primary', 'text-white');
          clone.innerHTML = '';
          clone.insertAdjacentHTML(
            'afterbegin',
            '<div class="px-1 py-1 bg-white text-dark" style="min-width: 300px;">' + r.get(currentDataAttr) + '</div>'
          );
        }
      })
    );

    this.subs.add(
      this.dragulaService
        .dropModel('contents')
        .subscribe(({ name, el, target, source, item, sourceModel, targetModel, sourceIndex, targetIndex }) => {
          item.definition = item || {};
          item.html = item.html || {};
          if (item.definition && item.html) {
            const currRowId = target.getAttribute('data-current-row-id');
            const currPageId = target.getAttribute('data-current-page-id');
            const currcolumnId = target.getAttribute('data-current-column-id');
            if (item.html.category === 'form') {
              if (!item.name) {
                item.name = `name__${new Date().getUTCMilliseconds()}`;
              }
              if (!item.options) {
                item.options = {};
                if (!item.options.nullable) {
                  item.options.nullable = true;
                }
              }
            }
            const params = {
              project_id: this.project_id,
              page: {
                currPageId: currPageId,
                currRowId: currRowId,
                currColumnId: currcolumnId
              },
              contentPos: targetModel.map(item => {
                return item.id ? item.id : null;
              }),
              html: item.html,
              definition: item
            };
            console.info('content sorted', params);
            if (typeof item.id != 'undefined') {
              params['id'] = item.id;
            }
          }
        })
    );
  }
}
