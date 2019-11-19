import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { HeadroomModule } from "@ctrl/ngx-headroom";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HeadroomModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
