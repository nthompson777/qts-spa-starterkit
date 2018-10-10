import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GlobalPipesModule } from './pipes/global-pipes.module';
import { AppComponent } from './app.component';
import { SharedComponentModule } from './shared/shared-component.module';
import { defineLocale } from 'ngx-foundation/chronos';
import { esLocale } from 'ngx-foundation/locale';
defineLocale('es', esLocale);
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SidenavComponent } from './shared/layout/sidenav/sidenav.component';

import { ModalContentComponent } from './components/modal/modal-content/modal-content.component';
import { MessageService } from './services/message.service';
import { DialogBodyComponent } from './components/modal/dialog-body/dialog-body.component';
import { AgGridModule } from 'ag-grid-angular';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
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
    SharedComponentModule,
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
