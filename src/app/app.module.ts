import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GlobalPipesModule } from './pipes/global-pipes.module';
import { AppComponent } from './app.component';
import { NgxFoundationModule } from './shared/ngx-foundation.module';
import { defineLocale } from 'ngx-foundation/chronos';
import { esLocale } from 'ngx-foundation/locale';
defineLocale('es', esLocale);
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgGridModule } from 'ag-grid-angular';

import { HeaderComponent } from './_layouts/header/header.component';
import { FooterComponent } from './_layouts/footer/footer.component';
import { ModalContentComponent } from './components/modal/modal-content/modal-content.component';
import { MessageService } from './services/message.service';
import { DialogBodyComponent } from './components/modal/dialog-body/dialog-body.component';

import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ModalContentComponent,
    DialogBodyComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    GlobalPipesModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxFoundationModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogBodyComponent,
  ]
})
export class AppModule { }
