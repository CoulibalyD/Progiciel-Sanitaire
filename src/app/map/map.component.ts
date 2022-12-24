import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };

  icon={
    url:"https://cdn-icons-png.flaticon.com/512/2858/2858306.png",
    scaledSize:{width:200, height:200},
  };

  lat = 14.725482  ; 
  lng = -17.445273  ; 

  lats = 14.40902;
  lngs = -17.4581890;

  lts = 14.4503;
  lgs = -17.3109;
}
