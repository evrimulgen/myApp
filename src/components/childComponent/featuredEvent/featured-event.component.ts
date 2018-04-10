// Import component decorator
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Helpers } from '../../../app/util';

@Component({
  selector: 'featured-event',
  providers: [Helpers],
  templateUrl: './featuredEvent.html',
  styleUrls: ['./featuredEvent.css']
})

export class featuredEventComponent implements OnInit {
  @Input() eventdata;

  filterVal : {} = {'title' : "U11"};

  constructor(private _Helpers: Helpers) { }

  datediff(datestr) {
    var date1 = new Date(datestr);
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  };

  filterKeyVal (object){
    if(!object)
      return false;

    return {title:object.age};
  }
  getUniqEvents (eventArray){

    //console.log(object);
    var newObj = _.groupBy(eventArray, function(item : any){
                      return item.age.name;
                  });
    return newObj;
    // console.log(newObj);

    // var newObj = _.uniq(eventArray, function(item: any) {
    //                  return item.age.name;
    //             });
    // console.log(newObj);
  }

  goForTournamentRegistration(tourObj) {

    // if (this._Helpers.getRegistrationButtonLink(tourObj).url == '#') {
    //   $scope.getConfimation = true;
    // } else {
    //   $location.url('/register/' + tourObj.uniqueName);
    // }
  };

  checkticket = function(eventdata) {
    if (!this._Helpers.isNullOrEmpty(eventdata.ticket) && !this._Helpers.isNullOrEmpty(eventdata.ticket.hash)) {
      return true;
    }
    for (var j = 0; j < eventdata.events.length; j++) {
      if (!this._Helpers.isNullOrEmpty(eventdata.events[j].ticket.hash)) {
        return true;
      }
    }
  };

  rightCornerText(eventdata) {
    if (!eventdata)
      return false;

    if (eventdata.endDateTime && eventdata.startDateTime && this._Helpers.compairDateWithCurrentDate(eventdata.startDateTime) && this._Helpers.compairlastDateWithCurrentDate(eventdata.endDateTime)) {
      return 'Live';
    } else if ((eventdata.createDate && this.datediff(eventdata.createDate) < 5) || (eventdata.drawDateAndTime && this.datediff(eventdata.drawDateAndTime) < 3) || (eventdata.matchListDateAndTime && this.datediff(eventdata.matchListDateAndTime) < 3) || (eventdata.tournamentRegStartDate && this.datediff(eventdata.tournamentRegStartDate) < 5)) {
      return (this.datediff(eventdata.createDate) < 5) ? 'New' : 'Updated';
    } else {
      return false;
    }
  };

  ngOnInit() {

  }
}
