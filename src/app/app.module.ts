import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IndexComponent} from './view/index/index.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {HttpClientModule} from '@angular/common/http';
import {SETTINGS_URL_TOKEN} from './data/services/settings.service';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: SETTINGS_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/settings`
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
