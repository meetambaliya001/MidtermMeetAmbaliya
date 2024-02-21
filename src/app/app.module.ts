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

    AppComponent,outputComponent, InputComponent

  ],
  imports: [
    BrowserModule,
    HeaderComponent,

    FooterComponent,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    InputComponent
  ],
  bootstrap: []
})
export class AppModule { }
