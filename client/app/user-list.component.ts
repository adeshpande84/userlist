import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/map';

@Component({
  selector: 'user-list',
  templateUrl: 'app/user-list.component.html',
})

export class UserListComponent implements OnInit {
	users: User[];

	constructor(private http: Http) { }

	ngOnInit(): void {
		this.getUsers();
	}

	getUsers() {
		this.http.get('app/mock-data/data.json').map(res => res.json()).subscribe(
			data => {this.users = data.users;}
		);	
	}
	
}