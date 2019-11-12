import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserDetailsService {

  product_satus = "https://www.iamder.com/product_stats.json";
  profile_url = "https://www.iamder.com/top_profiles.json";
  constructor(private _http: HttpClient) { }


  getProductStatus() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      })
    };
    return this._http.get(this.product_satus, httpOptions);
  }

  getProfileData() {
    return this._http.get(this.profile_url);
  }
}
