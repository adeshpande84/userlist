import { Pipe, PipeTransform } from '@angular/core';

import { User } from './user';

@Pipe({ name: 'searchUsers' })
export class UserSearchPipe implements PipeTransform {
  transform(users: User[], term: string) {
  	if(term != '' && term.length>1) {
  		return users.filter(user => user.name.toLowerCase().includes(term.toLowerCase()));	
  	} else {
  		return users;
  	}
    
  }
}