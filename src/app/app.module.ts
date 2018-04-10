import { BrowserModule } from '@angular/platform-browser';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { DatePipe } from '@angular/common';

// main component
import { AppComponent } from './app.component';

// helper files for function and API calling
import { Helpers } from './util';
import { httpService } from '../services/httpService';

//import { matchListComponent } from '../components/eventComponents/matchList/match-list.component';
import { liveMatchComponent } from '../components/eventComponents/liveMatch/live-match.component';
//import { tournamentDetail } from '../components/eventComponents/tournament/tournamentDetail';
import { footerComponent } from '../components/defaultComponents/footer/footer.component';
import { headerComponent } from '../components/defaultComponents/header/header.component';
import { routing } from './app.routes';

// filters
// import { matchListFilterPipe } from '../filters/matchlist.filter';
// import { yoGemsFilterPipe } from '../filters/commonFilter';
// import { CapitalizePipe } from '../filters/capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    footerComponent,
    //matchListComponent,
    liveMatchComponent,
    //tournamentDetail,
    //matchListFilterPipe,
    //yoGemsFilterPipe,
    //CapitalizePipe
  ],
  imports: [
    BrowserModule
    ,Ng2FilterPipeModule
    ,FormsModule
    ,HttpModule
    ,JsonpModule
    ,routing
  ],
  providers: [
    Helpers,
    httpService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
