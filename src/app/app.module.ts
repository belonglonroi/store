import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DividerModule } from 'primeng/divider';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { CollectionsComponent } from './collections/collections.component';
import { ItemsComponent } from './items/items.component';
import { PolicyComponent } from './policy/policy.component';
import { PromoComponent } from './promo/promo.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavigationComponent,
    HeroComponent,
    CollectionsComponent,
    ItemsComponent,
    PolicyComponent,
    PromoComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DividerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
