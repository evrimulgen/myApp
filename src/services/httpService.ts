import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
import { Helpers } from '../app/util';


@Injectable()
export class httpService {



   constructor(private _http: Http,
               private _Helpers: Helpers) { }

   getLiveMatchScoreUrl (){ return 'http://10.99.100.167:3000/api/live/getLiveMatches/'};

   getHomePageDataUrl (city:string){
     var sts = this._Helpers.getBaseUrl()+'user/tournament/homePage/?city=noida';
     return sts;
   }
   getActivityImageUrl (serviceName){
     var sts = this._Helpers.getBaseUrl()+'admin/service/metaData/?activityName='+serviceName;
     return sts;
   }








   get(url:any, header: any): Observable<any[]> {
       header ? header : {};
       return this._http.get(url, header)
           .map((response: Response) => <any[]> response.json())
           //.do(data => console.log('All: ' +  JSON.stringify(data)))
           .catch(this.handleError);
   };

   getHomeFeed(url:any,  header: any): Observable<any> {
     let dataResponse : any;
     header = {'Accept': 'application/xml'};
     	return this._http.get(url, {
         headers: header
       })
      .map((response: Response) => <any> response)
   };

   post(url:string, body, header): Observable<any[]>{
     header ? header : {};
     header.append('Content-Type', 'application/json');
         return this._http.get(url, header)
         .map((response: Response) => <any[]> response.json().data)
         //.do(data => console.log('All: ' +  JSON.stringify(data)))
         .catch(this.handleError);
   };

   put(url:string, body, header): Observable<any[]>{
     header ? header : {};
     header.append('Content-Type', 'application/json');
         return this._http.get(url, header)
         .map((response: Response) => <any[]> response.json().data)
         //.do(data => console.log('All: ' +  JSON.stringify(data)))
         .catch(this.handleError);
   };

   delete(url:string, body, header): Observable<any[]>{
     header ? header : {};
     header.append('Content-Type', 'application/json');
         return this._http.get(url, header)
         .map((response: Response) => <any[]> response.json().data)
         .catch(this.handleError);
   };

   private handleError(error: Response) {
       console.error(error);
       return Observable.throw(error.json().error || 'Server error');
   }
}
