import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { UserListComponent } from './user-list.component';
import { HttpModule } from '@angular/http';
import {UserSearchPipe} from "./user-search-pipe";
import {Ng2PaginationModule} from 'ng2-pagination';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';

import { UserDetailComponent } from './user-detail.component';
import { UserNewComponent } from './user-new.component';


const appRoutes: Routes = [
	{ path: '', redirectTo: '/users', pathMatch: 'full' },
	{ path: 'users', component: UserListComponent} ,
	{ path: 'users/new', component: UserNewComponent },
	{ path: 'users/:id', component: UserDetailComponent }
	
	
	
];


@NgModule({
  imports:      [ BrowserModule,HttpModule, Ng2PaginationModule, RouterModule.forRoot(appRoutes),FormsModule ],
  declarations: [ AppComponent, UserListComponent,UserSearchPipe,UserDetailComponent, UserNewComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HttpModule, UserService ]
})
export class AppModule { }
