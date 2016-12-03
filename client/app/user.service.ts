import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class UserService {
  private usersUrl = 'http://0.0.0.0:3000/api/users';  // URL to web api

  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {
    return this.http
      .get(this.usersUrl)
      .map(res => res.json());
  }

  getUser(id: string): Observable<User> {
    return this.http
      .get(this.usersUrl + '/' + id)
      .map(res => res.json());
  }

  
}