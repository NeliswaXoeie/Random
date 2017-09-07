import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import { FormsModule }   from '@angular/forms';
import { Form} from './form';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    Form
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
}


