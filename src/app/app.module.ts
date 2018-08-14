import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdmComponent } from './adm/adm.component';
import { RecieveChildSendComponent } from './recieve-child-send/recieve-child-send.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmComponent,
    RecieveChildSendComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
