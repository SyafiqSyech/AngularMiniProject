import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPodcastsComponent } from './podcasts/all-podcasts/all-podcasts.component';
import { AddPodcastComponent } from './podcasts/add-podcast/add-podcast.component';
import { EditPodcastComponent } from './podcasts/edit-podcast/edit-podcast.component';

const routes: Routes = [
  {
    path:'',
    component:AllPodcastsComponent
  },{
    path:'add',
    component:AddPodcastComponent
  },{
    path:'edit/:id',
    component:EditPodcastComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
