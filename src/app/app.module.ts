import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRouting} from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeftComponent } from './left/left.component';
import { FooterComponent } from "./footer/footer.component";
import { EmptyComponent } from './empty/empty.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LeftComponent,
    FooterComponent,
    EmptyComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,FormsModule,AppRouting,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
