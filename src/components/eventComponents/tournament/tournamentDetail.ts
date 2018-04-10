// Import component decorator
import { Component,OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Helpers } from '../../../app/util';
import { httpService } from '../../../services/httpService';

@Component({
  providers: [Helpers],
  templateUrl: './tournamentDetail.html',
  styleUrls: ['./tournamentDetail.css']
})

export class tournamentDetail implements OnInit{
  uniqName: any;
  private sub: any;
  tournamentObject : any;
  response: any;
  errorMessage : string;

 constructor(private route: ActivatedRoute,
             private _Helpers: Helpers,
             private _httpService : httpService
            ) {}

getTournamentDetailSuccess (object : any){
  this.tournamentObject = object.data;
  console.log(this.tournamentObject);
}
getTournamentDetail(uniqName : string){
  var url = 'https://api.yogems.com/api/v0/user/tournament/?eventName=table-tennis-gurgaon-yogems-table-tennis-gurgaon-district-ranking-tournament-04-2017&all=true';
  this._httpService.get(url,{})
  .subscribe(response => (this.getTournamentDetailSuccess(response)),
  error => this.errorMessage = <any>error);
};

  ngOnInit() : void{
    this.sub = this.route.params.subscribe(params => {
      this.uniqName = params['uniqName'];
      console.log(this.uniqName);
      this.getTournamentDetail(this.uniqName);
   });
  }
}
