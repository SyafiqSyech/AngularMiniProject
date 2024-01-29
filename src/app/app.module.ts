import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPodcastsComponent } from './podcasts/all-podcasts/all-podcasts.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPodcastComponent } from './podcasts/add-podcast/add-podcast.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditPodcastComponent } from './podcasts/edit-podcast/edit-podcast.component';
import { DeleteDialogPodcastComponent } from './podcasts/delete-dialog-podcast/delete-dialog-podcast.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AllPodcastsComponent,
    AddPodcastComponent,
    EditPodcastComponent,
    DeleteDialogPodcastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
