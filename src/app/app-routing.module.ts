import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './home-page/main/main.component';
import { TeamsPageComponent } from './home-page/teams-page/teams-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'teams',
    component: TeamsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
