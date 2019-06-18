import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiTableComponent } from './component/api-table/api-table.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ApiTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
