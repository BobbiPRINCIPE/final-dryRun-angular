import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfListComponent } from './components/prof-list/prof-list.component';
import { ProfListDataService } from './services/prof-list-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,  // NOTE ilker added for ProfListDataService to make REST call
  ],
  providers: [ProfListDataService], // NOTE ilker added ProfListDataService after creating the service via CLI
  bootstrap: [AppComponent]
})
export class AppModule { }
