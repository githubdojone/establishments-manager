import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ListPage } from './pages/list/list.page';
import { DetailsPage } from './pages/details/details.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { EstablishmentsListComponent } from './components/establishments-list/establishments-list.component';
import { EstablishmentsItemComponent } from './components/establishments-item/establishments-item.component';
import { EstablishmentDetailsComponent } from './components/establishment-details/establishment-details.component';

import { InputComponent } from './components/_shared/input/input.component';

import { SelectComponent } from './components/_shared/select/select.component';
import { ButtonComponent } from './components/_shared/button/button.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export let options: Partial<IConfig> | (() => Partial<IConfig>);
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
    InputComponent,
    SelectComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
