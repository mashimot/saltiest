import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LanguageToolService } from '../shared/services/language-tool.service';

@Component({
  selector: 'app-spell-checker',
  templateUrl: './spell-checker.component.html',
  styleUrls: ['./spell-checker.component.css']
})
export class SpellCheckerComponent implements OnInit {
    @Input() text;
    @Output() textChange = new EventEmitter();
    result: {
        matches: Array<any>
    };

    constructor(
        private languageToolService: LanguageToolService
    ) {

    }

    ngOnInit() {
        this.text = '';
        this.result = {
            matches: []
        };
        this.checkSpelling();
    }

    public textOnChange(): void {
        this.textChange.emit(this.text);
    }

    public checkSpelling(): void {
        this.result.matches = [];
        if (this.hasText()) {
            this.text = this.langTool();
            this.languageToolService.getCorrectWord(this.text)
            .subscribe(result => {
                if (result.matches) {
                    this.result = result;
                }
            });
        }
    }

    private langTool(): string {
        if (this.hasText()) {
            var arrOfWords = this.text.split(' ');
            var newText = [];
            for (var i = 0; i < arrOfWords.length; i++) {
                var word = arrOfWords[i].trim()
                word = word.charAt(0).toUpperCase() + word.slice(1);
                newText.push(word);
            }
            return newText.join(' ');
        }
        return '';
    }

    public hasText(): boolean {
        if (this.text.length > 0) {
            return true;
        }
        return false;
    }
}
