import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { StayIndexComponent } from './views/stay-index/stay-index.component';
import { StayListComponent } from './cmps/stay-list/stay-list.component';
import { StayPreviewComponent } from './cmps/stay-preview/stay-preview.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ToolBarComponent } from './cmps/tool-bar/tool-bar.component';
import { StayDetailsComponent } from './views/stay-details/stay-details.component';
import { DetailsInfoComponent } from './cmps/details-info/details-info.component';
import { ImgCarouselComponent } from './cmps/img-carousel/img-carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    StayIndexComponent,
    StayListComponent,
    StayPreviewComponent,
    AppHeaderComponent,
    ToolBarComponent,
    StayDetailsComponent,
    DetailsInfoComponent,
    ImgCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
