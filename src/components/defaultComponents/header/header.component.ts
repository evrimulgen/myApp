import {Component, OnInit, OnDestroy, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.html',
    styleUrls: ['./header.css']
})
export class headerComponent {
  public isUserLogin : boolean;
    constructor() {
      
    }

}
