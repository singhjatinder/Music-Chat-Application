import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { SpotifyComponent } from './spotify/spotify.component';

import {Routes, RouterModule} from "@angular/router";

const appRoutes = [
  // start at HomeComponent and redirect here for false URL paths, see 'path: '**''
  { path: '', component: HomeComponent },
  { path: 'spotify', component: SpotifyComponent },
  { path: 'youtube', component: YoutubeComponent },
  { path: '**', redirectTo: ''  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
