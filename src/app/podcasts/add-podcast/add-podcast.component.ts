import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Podcasts } from '../podcasts';
import { PodcastsService } from '../podcasts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-podcast',
  templateUrl: './add-podcast.component.html',
  styleUrl: './add-podcast.component.css'
})

export class AddPodcastComponent {
  	addSuperHeroForm: any;

   constructor(
    private fb: FormBuilder,
    private podcastService: PodcastsService,
    private router: Router
   ){}

   addForm = this.fb.group({
    title: [''],
    image: [''],
    desc: [''],
   })

   noImage = 'https://archive.org/download/no-photo-available//no-photo-available.png'

   create(){
    this.podcastService
    .add(this.addForm.value as Podcasts)
    .subscribe(() => {
      this.router.navigate(['/']);
    });
   }
}
