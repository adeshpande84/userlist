import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  
  selector: 'user-new',
  templateUrl: 'app/user-new.component.html'
})
export class UserNewComponent implements OnInit {
  
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {
      this.user = new User();
  }

  ngOnInit(): void {
    
  }

  goBack(): void {
    
    window.history.back();
  }

  save(user: User) {
    this.userService.saveNewUser(user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/users']);
      }
    );
  }
}