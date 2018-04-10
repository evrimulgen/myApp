import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { homeComponent } from './home-page.component';

const routes: Routes = [
  { path: '', component: homeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
