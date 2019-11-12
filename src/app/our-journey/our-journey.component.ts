import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../services/user-details.service';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-our-journey',
  templateUrl: './our-journey.component.html',
  styleUrls: ['./our-journey.component.scss']
})
export class OurJourneyComponent implements OnInit {

  productData: any;
  constructor(private userDetails:UserDetailsService, private _http:HttpClient) { }

  ngOnInit() {
    window.scroll(0,0);
    this.getProductDetails();
    
  }

  getProductDetails(){
    return this.userDetails.getProductStatus().subscribe(res => {
      this.productData = res;
      console.log(JSON.stringify(this.productData));
    })
  }
}
