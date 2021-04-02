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
import {OurAdvantagesComponent} from './components/our-advantages/our-advantages.component';
import {OUR_ADVANTAGE_URL_TOKEN} from './data/services/our-advantage.service';
import {SliderProductsComponent} from './components/slider-products/slider-products.component';
import {SLIDER_PRODUCT_URL_TOKEN} from './data/services/slider-product.service';
import {REVIEW_URL_TOKEN} from './data/services/review.service';
import {ReviewComponent} from './components/review/review.component';
import {ABOUT_URL_TOKEN} from './data/services/about.service';
import {AboutComponent} from './components/about/about.component';
import {DELIVERY_URL_TOKEN} from './data/services/delivery.service';
import {DeliveryComponent} from './components/delivery/delivery.component';
import {FooterComponent} from './components/footer/footer.component';
import {LayoutModule} from '@angular/cdk/layout';

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
    OurAdvantagesComponent,
    SliderProductsComponent,
    ReviewComponent,
    AboutComponent,
    DeliveryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    CarouselModule,
    MatButtonModule,
    LayoutModule,
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
    {
      provide: OUR_ADVANTAGE_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/our-advantage`
    },
    {
      provide: SLIDER_PRODUCT_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/slider-products`
    },
    {
      provide: REVIEW_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/reviews`
    },
    {
      provide: ABOUT_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/about`
    },
    {
      provide: DELIVERY_URL_TOKEN,
      useValue: `${environment.baseUrlApi}/delivery`
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
