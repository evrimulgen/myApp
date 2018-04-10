// Import component decorator
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import {Carousel} from '../../../defaultComponent/carousel/carousel.component';
import {Carousel} from '../carousel/carousel.component';
import {Slide} from '../carousel/slide.component';
import { OwlModule } from 'ng2-owl-carousel';

import { Helpers } from '../../../app/util';
import { httpService } from '../../../services/httpService';
import { featuredEventComponent } from '../../childComponent/featuredEvent/featured-event.component';
import { next7Event } from '../../childComponent/next7Events/next7event.component';
import { recentlyConcluded } from '../../childComponent/recentlyConcluded/recentlyConcluded-event.component';


// import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';



@Component({
  providers: [Helpers,httpService],
  // directives: [featuredEvent],
  templateUrl: './homeComponent.html',
  styleUrls: ['./homeComponent.css']
  //styleUrls: ['../../../styles.css']
})

export class homeComponent implements OnInit {
  cityName: string;
  private sub: any;
  homePageData: any;
  response: any;
  errorMessage: string;
  concludeddata: number;concludeddataTillIndex3: any[] ; yogemsOpenEvent: number; featuredOpenEvent: number; regopenevent: number; nextsevendata: any;
  totalrecord: number; totalYogemsrecord: number; totalfeaturedrecord: number;
  yogemsEvents: any[]; featuredEvents: any[];
  showSidePanelAboveYogems: boolean = false;
  showSidePanelBottomYogems: boolean = false;
  showSidePanelAboveFeatured: boolean = false;
  showSidePanelBottomFeatured: boolean  = false;
  numberOfRowsYogems: number;
  numberOfRowsfeatured: number;
  httpServiceObj: any;
  testdatashow:any[] = ['1','2','3','4'];
  guide = { feed: [] };
  articles = { feed: [] };
  answer = { feed: [] }
  guideshow : any; articalshow : any; answershow : any;
  hurry : any;
  homeDataGot : boolean = false;
  cat = ["art_and_craft","music","dance","sketching","sitar","hobby","painting","yoga","academics","day_care","gardening","martial_arts","parenting","sports","candle_making","debating","basketball","skating"];
/************* slider code start **********/
  //The time to show the next photo
private NextPhotoInterval:number = 2500;
//Looping or not
private noLoopSlides:boolean = false;
//Photos
private slides:Array<any> = [];
private showIndicator:boolean = false;

private addNewSlide() {
     this.slides.push(
        {image:'https://d2ke5tbemv7zww.cloudfront.net/images/slider/h-1.jpg',text:''},
        {image:'https://d2ke5tbemv7zww.cloudfront.net/images/slider/hn-1.jpg',text:''},
        {image:'https://d2ke5tbemv7zww.cloudfront.net/images/slider/h-2.jpg',text:''},
        {image:'https://d2ke5tbemv7zww.cloudfront.net/images/slider/cricket-group.jpg',text:''}
    );
}

private removeLastSlide() {
    this.slides.pop();
}
/************* slider code end **********/

  constructor(private route: ActivatedRoute,
    private _Helpers: Helpers,
    private _httpService: httpService
    ) {}

  util(val) {
    console.log(val);
  }

  getHomePageDataSuccess(object: any) {
    this.getGuideList();
    this.getArticlesList();
    this.getAnswersList();
    this.homePageData = object.data;
    this.concludeddata = this.homePageData.concluded;
    var localArray = [];
    if(this.concludeddata[0])
    localArray.push(this.concludeddata[0]);

    if(this.concludeddata[1])
    localArray.push(this.concludeddata[1]);

    if(this.concludeddata[2])
    localArray.push(this.concludeddata[2]);

    this.concludeddataTillIndex3 = localArray;
    this.nextsevendata = this.homePageData.nextSeven;
    this.yogemsEvents = [];
    this.featuredEvents = [];
    this.yogemsOpenEvent = 0;
    this.featuredOpenEvent = 0;
    this.regopenevent = 0;
    var tour = this.homePageData.upcoming;
    for (var i = 0; i <= tour.length - 1; i++) {
      if (this._Helpers.compairDateWithCurrentDate(tour[i].tournamentRegStartDate) && this._Helpers.compairlastDateWithCurrentDate(tour[i].lastDateRegistration)) {
        this.regopenevent = this.regopenevent + 1;
      }
      if (tour[i].organizedBy.toLowerCase() == 'yogems') {
        this.yogemsEvents.push(tour[i])
        if(this._Helpers.compairDateWithCurrentDate(tour[i].tournamentRegStartDate) && this._Helpers.compairlastDateWithCurrentDate(tour[i].endDateTime)){
              this.yogemsOpenEvent=this.yogemsOpenEvent+1;
        }
      } else {
        this.featuredEvents.push(tour[i])
        if (this._Helpers.compairDateWithCurrentDate(tour[i].tournamentRegStartDate) && this._Helpers.compairlastDateWithCurrentDate(tour[i].lastDateRegistration)) {
          this.featuredOpenEvent = this.featuredOpenEvent + 1;
        }
      }
    }
// this.homePageData && this.homePageData.upcoming ? this.totalrecord = this.homePageData.upcoming.length : this.totalrecord = 0;
                       this.totalrecord = tour.length
                       this.totalYogemsrecord=this.yogemsEvents.length;
                       this.totalfeaturedrecord=this.featuredEvents.length;

console.log('this.regopenevent',this.regopenevent,'this.totalrecord',this.totalrecord);
console.log('this.yogemsOpenEvent',this.yogemsOpenEvent,'this.totalYogemsrecord',this.totalYogemsrecord);
console.log('this.featuredOpenEvent',this.featuredOpenEvent,'this.totalfeaturedrecord',this.totalfeaturedrecord);

                       /****** filtering yogems Events start ********/
                       if(this.totalYogemsrecord > 0 && this.totalYogemsrecord < 3){
                          for(var i=this.totalYogemsrecord;i<3;i++){
                               this.yogemsEvents.push({'i':i});
                          }
                       }
                       if(this.totalYogemsrecord< 4){
                           this.showSidePanelAboveYogems = true;
                        }

                       if((this.yogemsOpenEvent > 4) || (this.yogemsOpenEvent===4 && this.totalYogemsrecord>4 )  ){
                          this.numberOfRowsYogems = 2;
                       }else{
                          this.numberOfRowsYogems = 1;
                       }

                       if(this.numberOfRowsYogems == 1 && this.totalYogemsrecord > 4){
                          this.showSidePanelAboveYogems = true;
                       }
                       if(this.numberOfRowsYogems > 1 && this.totalYogemsrecord > 8 ){
                          this.showSidePanelBottomYogems = true;
                       }
                       /****** filtering yogems Events end ********/


                         /******    featuredEvents fuctionality start ****/
                         if(this.totalfeaturedrecord>0 && this.totalfeaturedrecord< 3){
                             for(var i=this.totalfeaturedrecord;i<3;i++){
                                  this.featuredEvents.push({'i':i});
                             }
                          }
                         if(this.totalfeaturedrecord< 4){
                             this.showSidePanelAboveFeatured = true;
                         }
                         if((this.featuredOpenEvent >= 4 && this.totalfeaturedrecord > 4)){
                             this.numberOfRowsfeatured = 2;
                         }else{
                             this.numberOfRowsfeatured = 1;
                         }

                         if(this.totalfeaturedrecord >= 4 && this.featuredOpenEvent < 4 && this.numberOfRowsfeatured == 1){
                             this.showSidePanelAboveFeatured = true;
                         }
                         if(this.totalfeaturedrecord <= 7 && this.featuredOpenEvent >= 4 && this.featuredOpenEvent < 8 && this.numberOfRowsfeatured > 1){
                             this.showSidePanelBottomFeatured = true;
                         }
                         if(this.totalfeaturedrecord > 8 && this.featuredOpenEvent < 8 && this.numberOfRowsfeatured > 1){
                             this.showSidePanelBottomFeatured = true;
                         }
                         /******    featuredEvents fuctionality end ****/
                        // this.httpServiceObj = this._httpService;
                        // if(this.nextsevendata && this.nextsevendata.length > 0){
                        //     (this.nextsevendata).forEach(function(value, key){
                              //  var url = this.httpServiceObj.getHomePageDataUrl(value.service);
                              //  this._httpService.get(url,{})
                              //  .subscribe(response => (value.imagepic = response.data.coverPicFileUrl),
                              //  error => this.errorMessage = <any>error);
                                // commonService.activityMetaData(value.service)
                                //  .success(function(res){
                                //      if(!this._Helpers.checkResponse(res))
                                //      {
                                //        value.imagepic = res.data.coverPicFileUrl;
                                //      }
                                //  })
                                //  .error(function(res){
                                //
                                //  });
                        //     });
                         //}
                         this.homeDataGot = true;
  };

  showspace (eventdata : any){
    if(eventdata && eventdata.lastDateRegistration){
      if(this._Helpers.datediffforreg(eventdata.lastDateRegistration, '') >= -5 && this._Helpers.datediffforreg(eventdata.lastDateRegistration,'tillLastMomentOfDay') <= 0){
          this.hurry='hurry';
      }else{
          this.hurry=this.hurry;
      }
    }else{
      this.hurry = this.hurry;
    }
}


  getGuide (res : any){
      if(res && res.rss && res.rss.channel && res.rss.channel[0] && res.rss.channel[0].item){
        var channelArray = res.rss.channel[0].item;
               if(channelArray.length>0)
               {
                   for(var j=0; j<channelArray.length; j++)
                   {
                       if((channelArray[j].hasOwnProperty('title'))&&(channelArray[j].hasOwnProperty('link'))&&(channelArray[j].hasOwnProperty('images'))&&(channelArray[j].hasOwnProperty('description')))
                       {
                           if((!this._Helpers.isNullOrEmpty(channelArray[j].title))&&(!this._Helpers.isNullOrEmpty(channelArray[j].link))&&(!this._Helpers.isNullOrEmpty(channelArray[j].images))&&((!this._Helpers.isNullOrEmpty(channelArray[j].description__cdata)) || (!this._Helpers.isNullOrEmpty(channelArray[j].description))))
                           {
                               if(channelArray[j].description.hasOwnProperty('__cdata')&&channelArray[j].description.__cdata.length > 100)
                               {
                                   channelArray[j].short_des = channelArray[j].description.__cdata.substring(0, 99)+'...';
                               }
                               else if(channelArray[j].hasOwnProperty('description')&&channelArray[j].description.length > 100)
                               {
                                   channelArray[j].short_des = channelArray[j].description.substring(0, 99)+'...';
                               }
                               else{
                                   if(channelArray[j].description.hasOwnProperty('__cdata'))
                                   {
                                       channelArray[j].short_des = channelArray[j].description.__cdatas;
                                   }
                                   else
                                   {
                                       channelArray[j].short_des = channelArray[j].description;
                                   }
                               }

                               this.guide.feed.push({
                                   "title" : channelArray[j].title,
                                    // "link" : channelArray[j].link.replace("https","http"),
                                    "link" : channelArray[j].link,
                                    "image" : channelArray[j].images,
                             "description" : channelArray[j].short_des
                               });
                           }
                       }
                   }
               }
           }
        this.guideshow = this.guide.feed;
  };
  getArticles (res:any){
      if(res && res.rss && res.rss.channel && res.rss.channel[0] && res.rss.channel[0].item){
        var channelArray = res.rss.channel[0].item;
            if(channelArray.length>0)
              {
                  for(var j=0; j<channelArray.length; j++)
                  {
                      if((channelArray[j].hasOwnProperty('title'))&&(channelArray[j].hasOwnProperty('link'))&&(channelArray[j].hasOwnProperty('images')))
                      {
                          if((!this._Helpers.isNullOrEmpty(channelArray[j].title))&&(!this._Helpers.isNullOrEmpty(channelArray[j].link))&&(!this._Helpers.isNullOrEmpty(channelArray[j].images)))
                          {
                              this.articles.feed.push({
                                  "title" : channelArray[j].title,
                                  //"link" : channelArray[j].link.replace("https","http"),
                                  "link" : channelArray[j].link,
                                  "image" : channelArray[j].images
                              });
                          }
                      }
                  }
              }
          }
              this.articalshow = this.articles.feed;
  };
  getAnswers (res:any){
      if(res && res.rss && res.rss.channel && res.rss.channel[0] && res.rss.channel[0].item){
        var channelArray = res.rss.channel[0].item;
                if(channelArray.length>0)
                {
                    for(var j=0; j<channelArray.length; j++)
                    {
                        if((channelArray[j].hasOwnProperty('title'))&&(channelArray[j].hasOwnProperty('link'))&&(channelArray[j].categories[0].hasOwnProperty('category')))
                        {
                            if((!this._Helpers.isNullOrEmpty(channelArray[j].title))&&(!this._Helpers.isNullOrEmpty(channelArray[j].link))&&(!this._Helpers.isNullOrEmpty(channelArray[j].categories[0].category)))
                            {
                                if(typeof(channelArray[j].categories[0].category) == 'string'){
                                     if(this.cat.indexOf(channelArray[j].categories[0].category.toLowerCase().split(' ').join('_'))==-1)
                                        {
                                            channelArray[j].categories[0].category='default';
                                        }
                                        this.answer.feed.push({
                                          "title" : channelArray[j].title,
                                          //"link" : channelArray[j].link.replace("https","http"),
                                          "link" : channelArray[j].link,
                                          "category": channelArray[j].categories[0].category.toLowerCase().split(' ').join('_')
                                        });
                                }else if(typeof(channelArray[j].categories[0].category) == 'object'){
                                     if(this.cat.indexOf((channelArray[j].categories[0].category)[0].toLowerCase().split(' ').join('_'))==-1)
                                        {
                                            (channelArray[j].categories[0].category)[0]='default';
                                        }
                                        this.answer.feed.push({
                                            "title" : channelArray[j].title,
                                             // "link" : channelArray[j].link.replace("https","http"),
                                             "link" : channelArray[j].link,
                                              "category": (channelArray[j].categories[0].category)[0].toLowerCase().split(' ').join('_')
                                        });
                                }else{
                                    this.answer.feed.push({
                                            "title" : channelArray[j].title,
                                             //"link" : channelArray[j].link.replace("https","http"),
                                             "link" : channelArray[j].link,
                                            "category": 'default'
                                        });
                                }

                            }
                        }
                    }
                }
            }
                this.answershow = this.answer.feed;
  };

  makeArrayOfContent (data: any, type:string){
        switch(type){
          case 'guide':
            this.getGuide(data);
          break;
          case 'articles':
            this.getArticles(data);
          break;
          case 'answers':
            this.getAnswers(data);
          break;
        }
  };

  getGuideList (){
    var url = this._Helpers.guideListUrl;
    this._httpService.getHomeFeed(url, {})
      .subscribe(response => {
        let guideArray : any = this._Helpers.xml2json(response);
        if(guideArray && guideArray.__zone_symbol__value){
          this.makeArrayOfContent(guideArray.__zone_symbol__value, 'guide');
        }
      },
      error => this.errorMessage = <any>error);
  };
  getArticlesList (){
    var url = this._Helpers.articalListUrl;
    this._httpService.getHomeFeed(url, {})
      .subscribe(response => {
        let guideArray : any = this._Helpers.xml2json(response);
        if(guideArray && guideArray.__zone_symbol__value){
          this.makeArrayOfContent(guideArray.__zone_symbol__value, 'articles');
        }
      },
      error => this.errorMessage = <any>error);
  };
  getAnswersList (){
    var url = this._Helpers.answerListUrl;
    this._httpService.getHomeFeed(url, {})
      .subscribe(response => {
        let guideArray : any = this._Helpers.xml2json(response);
        if(guideArray && guideArray.__zone_symbol__value){
          this.makeArrayOfContent(guideArray.__zone_symbol__value, 'answers');
        }
      },
      error => this.errorMessage = <any>error);
  };

  getHomePageData(cityName: string) {
    var url = this._httpService.getHomePageDataUrl(cityName);
    this._httpService.get(url, {})
    .subscribe(response => (this.getHomePageDataSuccess(response)),
    error => this.errorMessage = <any>error);
  };


  ngOnInit(): void {
    this.addNewSlide();
    this.getHomePageData(this.cityName ? this.cityName : 'noida');
  }
}
