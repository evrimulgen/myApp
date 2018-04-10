
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { liveMatchComponent } from './live-match.component';

const routes: Routes = [
  { path: '', component: liveMatchComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
