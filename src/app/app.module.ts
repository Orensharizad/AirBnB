import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { StayIndexComponent } from './views/stay-index/stay-index.component';
import { StayListComponent } from './cmps/stay-list/stay-list.component';
import { StayPreviewComponent } from './cmps/stay-preview/stay-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    StayIndexComponent,
    StayListComponent,
    StayPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
