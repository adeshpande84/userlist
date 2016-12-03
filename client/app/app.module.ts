import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { UserListComponent } from './user-list.component';
import { HttpModule } from '@angular/http';
import {UserSearchPipe} from "./user-search-pipe";
import {Ng2PaginationModule} from 'ng2-pagination';
import { RouterModule, Routes } from '@angular/router';
//import { UserDetailComponent } from './user-detail.component';

/*const appRoutes: Routes = [
  { path: 'user/:id', component: UserDetailComponent }
];*/


@NgModule({
  imports:      [ BrowserModule,HttpModule, Ng2PaginationModule ],
  declarations: [ AppComponent, UserListComponent,UserSearchPipe ],
  bootstrap:    [ AppComponent ],
  providers: [ HttpModule ]
})
export class AppModule { }
