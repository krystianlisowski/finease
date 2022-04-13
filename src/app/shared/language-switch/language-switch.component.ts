import { Component } from '@angular/core';
import { LanguageService } from 'src/app/core/language/language.service';

@Component({
    selector: 'app-language-switch',
    templateUrl: './language-switch.component.html',
    styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent {
    get currentLang() {
        return this.languageService.currentLang;
    }

    constructor(public languageService: LanguageService) {}

    changeLanguage(key: string): void {
        sessionStorage.setItem('locale', key);
        this.languageService.changeLanguage(key);
    }
}
