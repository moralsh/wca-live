import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonUiModule } from './common-ui/common-ui.module';
import { CommonServicesModule } from './common-services/common-services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CommonUiModule,
    CommonServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
