import { Component, Inject } from '@angular/core';
import { PodcastsService } from '../podcasts.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog-podcast',
  templateUrl: './delete-dialog-podcast.component.html',
  styleUrl: './delete-dialog-podcast.component.css'
})
export class DeleteDialogPodcastComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogPodcastComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private podcastsService: PodcastsService
  ) {}
 
  confirmDelete() {
    this.podcastsService.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }
}
