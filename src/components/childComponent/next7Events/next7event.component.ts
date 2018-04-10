// Import component decorator
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Helpers } from '../../../app/util';

@Component({
  selector: 'next-seven-events',
  providers: [Helpers],
  templateUrl: './next7Events.html',
  styleUrls: ['./next7Events.css']
})

export class next7Event implements OnInit {
  @Input() nextSeven;
  service : any[]  = ["soccer","athletics","handball","kho_kho","table_tennis","swimming","volleyball","badminton","basketball","lawn_tennis","chess","hockey","cricket","shooting","golf"];
  filterVal : {} = {'title' : "U11"};

  constructor(private _Helpers: Helpers) { }

  getimagepath (nextSeven){
      if (nextSeven.hasOwnProperty("fileUrl")) {
          return nextSeven.fileUrl;
      }else if(nextSeven.hasOwnProperty("imagepic")&&!this._Helpers.isNullOrEmpty(nextSeven.imagepic)){
          return nextSeven.imagepic;
      }
      else if (this.service.indexOf(nextSeven.service.toLowerCase().split(' ').join('_')) != -1) {
          return 'https://d2ke5tbemv7zww.cloudfront.net/images/nextsevenevent/' + nextSeven.service.toLowerCase().split(' ').join('_') + '.jpg';
      } else {
          return 'https://d2ke5tbemv7zww.cloudfront.net/images/nextsevenevent/default.jpg';
      }

  };

  ngOnInit() {

  }
}
