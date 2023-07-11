import { Component, OnInit } from '@angular/core';

declare var ymaps: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public map: any;

  ngOnInit(): void {
    /* ymaps.ready().then(() => {
       this.map = new ymaps.Map('map', {
         center: [50.450100, 30.523400],
         zoom: 12
       });
     });*/
  }

}
