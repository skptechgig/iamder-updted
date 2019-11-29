import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserDetailsService {
  
  product_satus = "https://www.iamder.com/product_stats.json";
  profile_url  = "https://www.iamder.com/top_profiles.json";
  //profile_url="https://www.iamder.com/top_profiles.json"
  terms_and_condition_url="https://www.iamder.com/terms_and_conditions.txt";
  privacy_policy_url="https://www.iamder.com/privacy_policy.txt"
  
  constructor(private _http: HttpClient) { }


  getProductStatus() {    
    return this._http.get(this.product_satus);
  }

  getProfileData() {
    return this._http.get(this.profile_url);
  }
  getTermsAndConditions() {
    return this._http.get(this.terms_and_condition_url, {responseType: 'text'});
  }
  getPrivacyPolicy(){
    return this._http.get(this.privacy_policy_url, {responseType: 'text'});
  }
}
