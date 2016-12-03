import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/map';
import {UserSearchPipe} from "./user-search-pipe";

@Component({
  selector: 'user-list',
  templateUrl: 'app/user-list.component.html'
})

export class UserListComponent implements OnInit {
	users: User[];
	columns: string[];
	userSearchTerm: string;

	constructor(private http: Http) { 
		this.columns = ['id','name','birthday','email','username'];
	}

	ngOnInit(): void {
		this.userSearchTerm = '';
		this.getUsers();
	}

	getUsers() {
		this.http.get('app/mock-data/data.json').map(res => res.json()).subscribe(
			data => {this.users = data.users;}
		);	
	}

	search(term:string) {
		this.userSearchTerm = term;
	}
	
}