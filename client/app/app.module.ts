import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UserListComponent } from './user-list.component';
import { HttpModule } from '@angular/http';
import {UserSearchPipe} from "./user-search-pipe";

@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [ AppComponent, UserListComponent,UserSearchPipe ],
  bootstrap:    [ AppComponent ],
  providers: [ HttpModule ]
})
export class AppModule { }
