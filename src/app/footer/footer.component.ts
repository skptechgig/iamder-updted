import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { UserDetailsService } from '../services/user-details.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  termsAndCondition:any
  privacyPolicy:any
  constructor(public ngxSmartModalService: NgxSmartModalService ,private userDetails: UserDetailsService) { }

  ngOnInit() {
    this.getPrivacyPolicy();
    this.getTermsAndConditions()
  }
  openPrivacyPolicy(){
    this.ngxSmartModalService.open('privacyPolicy')
  }

  getPrivacyPolicy() {
    return this.userDetails.getPrivacyPolicy().subscribe(res => {
      this.privacyPolicy = res;
      //console.log(JSON.stringify(this.privacyPolicy))
    })
  }
  getTermsAndConditions() {
    return this.userDetails.getTermsAndConditions().subscribe(res => {
      this.termsAndCondition = res;
       //console.log(JSON.stringify(this.termsAndCondition)); 
    })
  }

}
