import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.scss']
})
export class ContactUsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }
    model: any = {};
  
    onSubmit() {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    }
}
