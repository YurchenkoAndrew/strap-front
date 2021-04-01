import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IndexComponent} from './view/index/index.component';
import {HttpClientModule} from '@angular/common/http';
import {SETTINGS_URL_TOKEN} from './data/services/settings.service';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {TopCarouselComponent} from './components/top-carousel/top-carousel.component';
import {TOP_CAROUSEL_URL_TOKEN} from './data/services/top-carousel.service';
import {MatButtonModule} from '@angular/material/button';
import {INFO_URL_TOKEN} from './data/services/info.service';
import {InfoComponent} from './components/info/info.component';
import {PRODUCT_URL_TOKEN} from './data/services/product.service';
import {ProductComponent} from './components/product/product.component';
import {ProductDescriptionComponent} from './components/product/product-description/product-description.component';
import {ProductCarouselHorizontalComponent} from './components/product/product-carousel-horizontal/product-carousel-horizontal.component';
import {ProductCarouselVerticalComponent} from './components/product/product-carousel-vertical/product-carousel-vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavigationComponent,
    TopCarouselComponent,
    InfoComponent,
    ProductComponent,
    ProductDescriptionComponent,
    ProductCarouselHorizontalComponent,
    ProductCarouselVerticalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    CarouselModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: SETTINGS_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/settings`
    },
    {
      provide: TOP_CAROUSEL_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/top-carousel`
    },
    {
      provide: INFO_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/info`
    },
    {
      provide: PRODUCT_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/products`
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
