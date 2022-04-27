import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './home-page/leaderboard/leaderboard.component';

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
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
