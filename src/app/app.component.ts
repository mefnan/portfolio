import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
// @ts-ignore
import { TranslateService } from '@ngx-translate/core';
// @ts-ignore
import {LanguageService} from "src/app/services/language/language.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'efnanmerdan-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
  ){
  }

  ngOnInit(): void {
    this.languageService.initLanguage()


    this.titleService.setTitle( "Efnan Merdan | Programmer and Video Creator" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Frontend, software, developer, video editing'},
      {name: 'description', content: 'A student of Computer Science who is also interested in video creating and editing.'},
    ]);

  }
}
