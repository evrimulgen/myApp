import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';

@Injectable()

export class Helpers {

   constructor(private datePipe: DatePipe) {}

    getBaseUrl() {
    var url="https://api.yogems.com/api/";
    // var url="https://api.yogems.in/api/";
           var version="v0/";
           var baseurl=url+version;
           return baseurl;
    };
    putCookie(type, value) {
      //  var expireDate = new Date();
      //         expireDate.setDate(expireDate.getDate() + 1);
      // $cookies.put(type, value,{'expires': expireDate});
  };
  getCookie(type) {
      //     var value= $cookies.get(type);
      //     this.putCookie(type,value)
      // return $cookies.get(type);

  };
loggedInUserType () {
    // if(this.getCookie('yUType')){
    //     return this.getCookie('yUType');
    // }else{
    //     if(this.getCookie('yUT') && commonFactory && commonFactory.getCommonData('userInfo') && commonFactory.getCommonData('userInfo').userInfo && commonFactory.getCommonData('userInfo').userInfo.userType){
    //         return commonFactory.getCommonData('userInfo').userInfo.userType;
    //     }else{
    //         return 'notLoggedIn';
    //     }
    // }
};
    isNullOrEmpty (str){
      if (str == null || str == undefined || str == '') {
           return true;
       }
       else {
           return false;
       }
    };
    compairDateWithCurrentDate(str){
        var strdate =new Date(str);
        var currentdate=new Date();
        if(currentdate>=strdate){
            return true
        }else{
            return false;
        }
    };
    xml2json(xmlData){
      let parseString = require('xml2js').Parser();
      return new Promise((resolve, reject) => {
        parseString.parseString(xmlData._body, (err, data) => {
          if (err !== null && data !== null)
          reject(err)
          resolve(data)
        })
      })
    };
    checksamemonth(strstart,strend) {
        if(!strend){
            return 1;
        }else if(new Date(strstart) === new Date(strend) && (new Date(strstart)).getDate() === (new Date(strend)).getDate()){
            return 4;
        }else if(new Date(strstart) !== new Date(strend)){
            return 3;
        }else if(new Date(strstart) === new Date(strend)){
            return 2
        }else{
            return 5
        }
    };
    datediffforreg(datestr, type) {
        if(!datestr){
          return 0;
        }

          let date2 : any = new Date();
          let date1 : any;
         if(type && type == 'tillLastMomentOfDay'){
            date1 = new Date(datestr);
            date1 = date1.getFullYear()+"/"+(date1.getMonth()+1)+"/"+(date1.getDate()+1);
            date1 = new Date(date1);
         }else{
            date1 = new Date(datestr);
         }
        var timeDiff = (date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    };
    filterArrayForUniqObject (objectArray : any[], filterString : any[]){
      var filteredArray = _.groupBy(objectArray, function(item : any){
                          if(filterString.length == 1){
                            return item[filterString[0]];
                          }
                          if(filterString.length == 2){
                            return (item[filterString[0]])[filterString[1]]
                          }
                        });
      console.log(filteredArray);
      return filteredArray;
    };
    filterEventArray (objectArray: any[], filterString : any[]){

      var localArray = [];
      (objectArray).forEach(function(value : any, key: any){
          if(filterString.length == 1 && value[filterString[0]]){
            if(localArray.indexOf(value[filterString[0]])){
              localArray.push(value[filterString[0]]);
            }
          }
          if(filterString.length == 2 && value[filterString[0]] && (value[filterString[0]])[filterString[1]]){
            if(localArray.indexOf((value[filterString[0]])[filterString[1]]) == -1){
              localArray.push((value[filterString[0]])[filterString[1]]);
            }
          }
       });

       return localArray;
    };
    getRegistrationButtonLink(eventData){
                if(!eventData.uniqueName){
                    return "#"
                }

                var str = '';
                var tournamentArray = [{uniqueName : 'noida-yogems-ncr-badminton-open-championship-series-2016-12-2016', subMsg : '*Entry fees will be non-refundable.', msg :'This tournament is open only for the participants, who are studying in schools located in all districts of Delhi, Gautam Budh Nagar (Noida, Greater Noida), Gurgaon, Faridabad and Ghaziabad, have valid age proof and willing to go through medical if needed to prove authenticity. '}];

                var isConfirmationNeeded = false;
                let requestedObj : any = {};
                tournamentArray.forEach(function(val, key){
                    if(val.uniqueName == eventData.uniqueName){
                        isConfirmationNeeded = true;
                        requestedObj.url = '#';
                        requestedObj.msg = val.msg;
                        requestedObj.subMsg = val.subMsg;
                    }
                });

                if(this.getCookie('yUT') && this.getCookie('yUH')){
                    if(isConfirmationNeeded){
                        return requestedObj;
                    }else{
                        // if(this.loggedInUserType() == 'team'){
                        //     requestedObj.url = '/teamRegistration?'+ eventData.uniqueName;
                        //     return requestedObj
                        // }else{
                        //     requestedObj.url = '/register/'+ eventData.uniqueName;
                        //     return requestedObj
                        // }
                    }
                }else{
                    if(isConfirmationNeeded){
                        return requestedObj;
                    }else{
                        requestedObj.url = '/login?tourUniqName=' + eventData.uniqueName;
                        return requestedObj
                    }
                }
            };
    compairlastDateWithCurrentDate(str){
        var strdate =new Date(str);
        var today = new Date();
        let dd: any;
        dd = today.getDate();
        let mm: any;
        mm = today.getMonth()+1; //January is 0!

        var yyyy = today.getFullYear();
        if(dd < 10){
            dd ='0'+dd
        }
        if(mm < 10){
             mm='0'+mm
        }
        var todayDate = yyyy+'/'+mm+'/'+dd;
        var currentdate=new Date(today);
        if(strdate>=currentdate){
            return true
        }else{
            return false;
        }
    };
    changeDateFormat(str, format) {

        if(!str)
            return;


            // let formatter = new DateFormatter();
            // console.log(formatter.format(new Date("1924-02-25T07:44:40.755Z"), "MMMM y"));
        if (format == 'yy-mm-dd') {
            return str = str.split('/')[2] + '-' + str.split('/')[1] + '-' + str.split('/')[0];
        }
        if (format == 'yy/mm/dd') {
            return str = str.split('/')[2] + '/' + str.split('/')[1] + '/' + str.split('/')[0];
        } else if (format == 'dd/mm/yy') {
            return str = str.split('/')[2] + '/' + str.split('/')[1] + '/' + str.split('/')[0];
        } else if (format == 'mm/dd/yy') {
            var date = ((parseInt(str.split('/')[1]) < 10) && ((str.split('/')[1]).length == 1)) ? (date = '0' + str.split('/')[1]) : (date = str.split('/')[1]);
            var month = ((parseInt(str.split('/')[2]) < 10) && ((str.split('/')[2]).length == 1)) ? (month = '0' + str.split('/')[2]) : (month = str.split('/')[2]);
            return str = date + '/' + month + '/' + str.split('/')[0];
        } else if (format == 'special') {
          str = this.datePipe.transform(str, 'MMM d, yyyy');
          return str;
        }else if (format == 'specialregopen') {
            str = this.datePipe.transform(str, 'MMM d');
            return str;
        }
        else if(format == 'specialDateTime'){
            str = this.datePipe.transform(str, 'MMM d, yyyy')+'  '+str.split(' ')[1]+' '+str.split(' ')[2];
            return str;
        } else if(format == 'special24DateTime'){
            // var date = new Date(str);
            // var hours = date.getHours();
            // var minutes = date.getMinutes();
            // var ampm = hours >= 12 ? 'pm' : 'am';
            // hours = hours % 12;
            // hours = hours ? hours : 12; // the hour '0' should be '12'
            // minutes = minutes < 10 ? '0'+minutes : minutes;
            // var strTime = hours + ':' + minutes + ' ' + ampm;
            //  str = $filter('date')(new Date(str), 'MMM d, yyyy')+' at '+strTime;
            // return str;
        }else if(format =='specialmonth'){
            str = this.datePipe.transform(str, 'MMM');
             return str;
        }else if (format =='specialdate'){
            str = this.datePipe.transform(str, 'd');
            return str;
        }else if(format =='serverdate'){
            str = this.datePipe.transform(str, 'yyyy-MM-dd');
            return str;
        }else if(format=='specialyear'){
            str = this.datePipe.transform(str, 'yyyy');
            return str;
        }else if(format=='time'){
            str = this.datePipe.transform(str, 'hh:mm a');
            return str;
        }else if(format=='server'){
          str = this.datePipe.transform(str, 'yyyy/MM/dd');
          return str;
        }
        else{

        }
        switch(format){
          case "time12HourFormat":
              var date : any = new Date(str);
              var hours = date.getHours();
              var minutes = date.getMinutes();
              var ampm = hours >= 12 ? 'pm' : 'am';
              hours = hours % 12;
              hours = hours ? hours : 12; // the hour '0' should be '12'
              minutes = minutes < 10 ? '0'+minutes : minutes;
              var strTime = hours + ':' + minutes + ' ' + ampm;
               str = strTime;
            return str;

        }

                };






    tournamentHash : string = '58485a5e-0e35-11e7-baa8-020095431bd7';
    localApiForLiveMatch : string ='http://10.99.100.167:3000/api/live/getLiveMatches/';
    prodAPIForLiveMatch : string ='https://api.yogems.com/api/v0/user/match/liveAndUpcoming/?tournamentHash=fb0ba325-0e3b-11e7-baa8-020095431bd7';
    prodAPIForMatchList : string = 'https://api.yogems.com/api/v0/user/match/?tournamentHash=fb0ba325-0e3b-11e7-baa8-020095431bd7&date=2017/4/23';
    guideListUrl:string = 'https://www.yogems.com/Yopedia/guide/feed/';
    articalListUrl:string = 'https://www.yogems.com/Yopedia/articles/feed/';
    answerListUrl:string = 'https://www.yogems.com/answers/feed/';
    matchListAPIUrl() {
      return this.getBaseUrl()+'user/tournament/homePage/?city=noida';
    }
}
