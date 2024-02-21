import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {OutputComponent} from "./output/output.component";
import {InputComponent} from "./input/input.component";

@NgModule({
  declarations: [

AppComponent

  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    OutputComponent,InputComponent,
    FooterComponent,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
