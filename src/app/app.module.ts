import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/home/about/about.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { VideoProjectsComponent } from './components/home/video-projects/video-projects.component';
import { WebsiteProjectsComponent } from './components/home/website-projects/website-projects.component';
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';

// @ts-ignore
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
// @ts-ignore
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import {environment} from "../environments/environment";
// @ts-ignore
import { ServiceWorkerModule } from '@angular/service-worker';
// @ts-ignore
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
// @ts-ignore
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ArchiveComponent } from './components/archive/archive.component';
import { DiplomasComponent } from './components/home/diplomas/diplomas.component'

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BannerComponent,
    ContactComponent,
    VideoProjectsComponent,
    WebsiteProjectsComponent,
    HeaderComponent,
    FooterComponent,
    ArchiveComponent,
    DiplomasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    AnimateOnScrollModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgxGoogleAnalyticsModule.forRoot(environment.trackAnalyticID),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
