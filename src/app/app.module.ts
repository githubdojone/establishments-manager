import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ListPage } from './pages/list/list.page';
import { DetailsPage } from './pages/details/details.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { EstablishmentsListComponent } from './components/establishments-list/establishments-list.component';
import { EstablishmentsItemComponent } from './components/establishments-item/establishments-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListPage,
    DetailsPage,
    NotFoundPage,
    EstablishmentsListComponent,
    EstablishmentsItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
