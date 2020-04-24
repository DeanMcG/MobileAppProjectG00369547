import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  //Variables
  long:number;
  lat:number;

  //Constructor for geolocation
  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
  }

  //Locationg for printing of long/latitude
  locationPrint(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.long = resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
