import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-flashlight',
  templateUrl: './flashlight.page.html',
  styleUrls: ['./flashlight.page.scss'],
})
export class FlashlightPage implements OnInit {

  //Constructor for flashlight
  constructor(private flashlight:Flashlight) { }

  ngOnInit() {
  }
  //Method for toggle of flashlight
  lightMethod(){
    this.flashlight.toggle();
  }

}
