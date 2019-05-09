import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
<div class="modal fade" [ngClass]="{ 'show': isOpen }" [style.display]="isOpen ? 'block' : 'none'">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" (click)="onNo()">&times;</button>
            </div>
            <div class="modal-body">
                {{ message }}
            </div>
            <div class="modal-footer">
                <button class="btn btn-danger" (click)="onNo()">No</button>
                <button class="btn btn-primary" (click)="onYes()">Yes</button>
            </div>
        </div>
    </div>
</div>
`
})
export class ModalComponent implements OnInit {
    @Input() isOpen = false;
    @Input() message: ''
    @Output() handleYes = new EventEmitter();
    @Output() handleNo = new EventEmitter();

    ngOnInit() {}

    closeModal(){
        this.isOpen = false;
    }

    onNo = () => {
        this.handleNo.emit();
    }

    onYes = () => {
        this.handleYes.emit();
    }
}