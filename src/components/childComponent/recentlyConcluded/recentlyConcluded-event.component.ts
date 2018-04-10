// Import component decorator
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Helpers } from '../../../app/util';

@Component({
  selector: 'recently-concluded',
  providers: [Helpers],
  templateUrl: './recentlyConcluded.html',
  styleUrls: ['./recentlyConcluded.css']
})

export class recentlyConcluded implements OnInit {
  @Input() recentlyEventData;

  constructor(private _Helpers: Helpers) { }


  ngOnInit() {

  }
}
