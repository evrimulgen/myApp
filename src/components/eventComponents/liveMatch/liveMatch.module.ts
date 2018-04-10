import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

// import { routing } from './home.routing';
import { liveMatchComponent } from './live-match.component';


@NgModule({
    imports: [
      // routing
      CommonModule
      ,Ng2FilterPipeModule
    ],
    declarations: [
      liveMatchComponent
      ],
    exports: []
})

export class liveMatchModule { }
