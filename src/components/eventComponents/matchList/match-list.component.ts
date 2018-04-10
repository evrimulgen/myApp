// Import component decorator
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { Helpers } from '../../../app/util';
import { httpService } from '../../../services/httpService';


@Component({
  providers: [Helpers],
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})

// Component class
export class matchListComponent implements OnInit  {

  errorMessage:string;
  // userFilter: any = { team1NameTemp: '' };
  myMatchs : any[];
  matchObj: any[];
  filterBy: string;
  constructor(private _httpService : httpService,
              private _Helpers: Helpers) {};

  valueGet(value:any){
    this.myMatchs = value.data;
  };

  getMatchListValue (){
      var url = this._Helpers.prodAPIForMatchList;
      // var url = this._Helpers.matchListAPIUrl();
      this._httpService.get(url,{})
      .subscribe(matchObj => (this.valueGet(matchObj)),
      error => this.errorMessage = <any>error);
  }

  ngOnInit() : void{
    this.getMatchListValue();
  }

}
