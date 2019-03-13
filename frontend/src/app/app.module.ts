import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule.forRoot(),
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiYXVuZHJleWQiLCJhIjoiY2p0NmdxOXVrMGRuZjN5bzgyaXNobDV6ciJ9.wmFHVI_WSgkT2sJ3h4WGww'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
