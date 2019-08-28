import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: DetailComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);