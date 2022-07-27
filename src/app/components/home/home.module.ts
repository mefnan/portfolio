import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
// @ts-ignore
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
// @ts-ignore
import { CarouselModule } from 'ngx-owl-carousel-o';
// @ts-ignore
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {VideoProjectsComponent} from "./video-projects/video-projects.component";
import {WebsiteProjectsComponent} from "./website-projects/website-projects.component";
import {DiplomasComponent} from "./diplomas/diplomas.component";

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    VideoProjectsComponent,
    WebsiteProjectsComponent,
    DiplomasComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    CarouselModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class HomeModule { }
