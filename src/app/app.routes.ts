
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { homeComponent } from '../components/home/home-page.component';
import { homeModule } from '../components/defaultComponents/home/home.module';
//import { matchListComponent } from '../components/eventComponents/matchList/match-list.component';
import { liveMatchComponent } from '../components/eventComponents/liveMatch/live-match.component';
//import { liveMatchModule } from '../components/eventComponents/liveMatch/liveMatch.module';
//import { tournamentDetail } from '../components/eventComponents/tournament/tournamentDetail';

// Route Configuration
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {
  //   path: '',
  //   loadChildren: '../components/home/home.module#homeModule'
  // },
  {
    path: 'home', loadChildren: '../components/defaultComponents/home/home.module#homeModule'
  },
  //{ path: 'matchList', component: matchListComponent },
   { path: 'liveMatch', component: liveMatchComponent }
  // {path:'liveMatch', loadChildren:'../components/eventComponents/liveMatch/liveMatch.module#liveMatchModule'}
  //,{path : 'event/:uniqName', component:tournamentDetail}
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
