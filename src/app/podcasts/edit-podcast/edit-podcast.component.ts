import { Component } from '@angular/core';
import { PodcastsService } from '../podcasts.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Podcasts } from '../podcasts';

@Component({
  selector: 'app-edit-podcast',
  templateUrl: './edit-podcast.component.html',
  styleUrl: './edit-podcast.component.css'
})
export class EditPodcastComponent {
  constructor(
    private fb: FormBuilder,
    private podcastsService: PodcastsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = param.get('id');
      this.getById(id);
    });
  }
 
  noImage = 'https://archive.org/download/no-photo-available//no-photo-available.png';

  updateForm = this.fb.group({
    id: [''],
    title: [''],
    image: [''],
    desc: ['']
  });

  getById(id: any) {
    this.podcastsService.getById(id)
    .subscribe((data) => {
      this.updateForm.setValue(data);
    });
  }
 
  update() {
    this.podcastsService.update((this.updateForm.value as Podcasts))
    .subscribe(() => {
      this.router.navigate(["/"]);
    })
  }
}
