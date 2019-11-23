import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.scss']
})
export class UserStoriesComponent implements OnInit {

  userData: any;
  constructor(private userService:UserDetailsService) { }

  ngOnInit() {
    window.scroll(0,0);
    this.getUserStories();
  }

  getUserStories(){
    return this.userService.getProfileData().subscribe(res => {
      this.userData = res;
    
    })
  }

}
