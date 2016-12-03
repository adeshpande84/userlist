import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  
  selector: 'user-detail',
  templateUrl: 'app/user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  
  user: User;
  
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = params['id'];
        
        this.userService.getUser(id).subscribe(data => this.user = data);
      }
    });
  }

  goBack(): void {
    
    window.history.back();
  }

  save(user: User) {
    this.userService.saveUser(user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/users']);
      }
    );
  }
}