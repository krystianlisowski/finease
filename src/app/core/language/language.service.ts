import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLang = 'pl';
  languages: string[] = ['pl', 'en'];

  constructor(private translateService: TranslateService) { }

  init(): void {
    this.currentLang = sessionStorage.getItem('locale') || 'pl';
    this.translateService.setDefaultLang(this.currentLang);
    this.translateService.use(this.currentLang);
}

changeLanguage(languageKey: string): void {
    this.currentLang = languageKey;
    this.translateService.setDefaultLang('pl');
    this.translateService.use(this.currentLang);
}
}
