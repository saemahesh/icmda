import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UcWidgetModule } from 'ngx-uploadcare-widget';
import { IdcardComponent } from './idcard/idcard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    IdcardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UcWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
