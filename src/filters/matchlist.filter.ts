import {  PipeTransform, Pipe } from '@angular/core';
//import { Match } from '../services/Match';

@Pipe({
   name: 'myFilter',
   pure: false
})
export class matchListFilterPipe implements PipeTransform {

   transform(myMatchs: any[], filterBy: Object): any {
      if (!myMatchs || !filterBy) {
          return myMatchs;
      }
      return myMatchs.filter(match => (((match.team1NameTemp).toLowerCase()).indexOf(filterBy) !== -1 || (match.team1NameTemp).indexOf(filterBy) !== -1)
      || (((match.team2NameTemp).toLowerCase()).indexOf(filterBy) !== -1 || (match.team2NameTemp).indexOf(filterBy) !== -1)
      || (((match.eventName).toLowerCase()).indexOf(filterBy) !== -1 || (match.eventName).indexOf(filterBy) !== -1)
      || (((match.roundName).toLowerCase()).indexOf(filterBy) !== -1 || (match.roundName).indexOf(filterBy) !== -1)
      );
      //  return myMatchs.filter(match => (match.team1NameTemp.indexOf(filterBy) !== -1) || (match.team2NameTemp.indexOf(filterBy) !== -1) || (match.eventName.indexOf(filterBy) !== -1));
   }
}
