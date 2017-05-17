import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {RoutingModule} from './routing.module'

import { AppComponent } from './app.component';
import {TestComponent} from './test.component';
import {ServiceComponent} from './service-example.component';
import {MenuComponent} from './menu.component'
import {HomeComponent} from './home.component'
import {GalleryComponent} from './gallery.component'
import {FormExampleComponent} from './form.component'
import {GridComponent} from './grid.component'

import {AccessibleDirective, rufAccessibleDirective} from './accessible.directive'

import {CaptalizePipe,MyFilterPipe} from './pipes/captalize.pipe'

import {ApiService} from './services/api.service'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CaptalizePipe,
    ServiceComponent,
    MenuComponent,
    HomeComponent,
    GalleryComponent,
    AccessibleDirective,
    rufAccessibleDirective,
    FormExampleComponent,
    GridComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
