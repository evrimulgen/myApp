import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwlModule } from 'ng2-owl-carousel';

import {Carousel} from '../carousel/carousel.component';
import {Slide} from '../carousel/slide.component';
import { routing } from './home.routing';
import { homeComponent } from './home-page.component';

import { featuredEventComponent } from '../../childComponent/featuredEvent/featured-event.component';
import { next7Event } from '../../childComponent/next7Events/next7event.component';
import { recentlyConcluded } from '../../childComponent/recentlyConcluded/recentlyConcluded-event.component';

@NgModule({
    imports: [routing
      ,CommonModule
      ,OwlModule
    ],
    declarations: [
      homeComponent
      ,Carousel
      ,Slide
      ,featuredEventComponent
      ,next7Event
      ,recentlyConcluded
      ],
    exports: []
})

export class homeModule { }
