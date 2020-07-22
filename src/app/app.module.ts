import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ListPage } from './pages/list/list.page';
import { DetailsPage } from './pages/details/details.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { EstablishmentsListComponent } from './components/establishments-list/establishments-list.component';
import { EstablishmentsItemComponent } from './components/establishments-item/establishments-item.component';
import { EstablishmentDetailsComponent } from './components/establishment-details/establishment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListPage,
    DetailsPage,
    NotFoundPage,
    EstablishmentsListComponent,
    EstablishmentsItemComponent,
    EstablishmentDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
