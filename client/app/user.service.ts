import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class UserService {
  private usersUrl = 'http://0.0.0.0:3000/api/iUsers';

  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl).map(res => res.json());
  }

  getUser(id: string): Observable<User> {
    return this.http.get(this.usersUrl + '/' + id).map(res => res.json());
  }

  saveUser(user: User): Observable<User> {
    
    let id = user.id;
    delete user.id;

    let headers = new Headers({ 'Content-Type': 'application/json' });

    let body = JSON.stringify(user);
    return this.http.put(this.usersUrl + '/' + id, body, headers).map(res => res.json());
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.usersUrl + '/' + id).map(res => res.json());
  }

  saveNewUser(user: User): Observable<User> {
    
    let headers = new Headers({ 'Content-Type': 'application/json' });

    let body = JSON.stringify(user);
    return this.http.post(this.usersUrl, body, headers).map(res => res.json());
  }
}