import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/map';
import {UserSearchPipe} from "./user-search-pipe";
import { UserService } from './user.service';

@Component({
  selector: 'user-list',
  templateUrl: 'app/user-list.component.html'
})

export class UserListComponent implements OnInit {
	users: User[];
	columns: string[];
	userSearchTerm: string;

	constructor(private http: Http, private userService: UserService, private router: Router) { 
		this.columns = ['id','name','birthday','email','username'];
	}

	ngOnInit(): void {
		this.userSearchTerm = '';
		this.getUsers();
	}

	getUsers() {
		this.userService.getUsers().subscribe(
			data => {this.users = data;}
		);	
		/*this.http.get('app/mock-data/data.json').map(res => res.json()).subscribe(
			data => {this.users = data.users;}
		);*/	
	}

	search(term:string) {
		this.userSearchTerm = term;
	}

	onSelect(user: User) {
		this.router.navigate(['/users', user.id]);
	}

	deleteUser(id: string) {
		this.userService.deleteUser(id).subscribe(
			data => {console.log('Deleted user');
			this.router.navigate(['/users']);}
		);
	}

	onClickNewUser() {
		this.router.navigate(['/users/new']);}
	}
	
}