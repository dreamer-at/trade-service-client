import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiModule } from '@api/prod-api/prod-api.module';
import { CoreModule } from './core/core.module';
import { SaveOperationComponent } from './add-operation/save-operation.component';
import { CommonModule } from '@angular/common';
import { AppRoutesTs } from './app.routes.ts';

@NgModule({
  declarations: [
    AppComponent,
    SaveOperationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesTs,
    FormsModule,
    HttpClientModule,
    ApiModule,
    CoreModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
