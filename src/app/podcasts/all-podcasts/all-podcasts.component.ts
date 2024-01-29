import { Component, OnInit } from '@angular/core';
import { PodcastsService } from '../podcasts.service';
import { Podcasts } from '../podcasts';
import { DeleteDialogPodcastComponent } from '../delete-dialog-podcast/delete-dialog-podcast.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-all-podcasts',
  templateUrl: './all-podcasts.component.html',
  styleUrl: './all-podcasts.component.css'
})

export class AllPodcastsComponent implements OnInit {
  allPodcasts:Podcasts[] = [];
  searchControl = new FormControl('')
  pageIndex:number = 0;
  pageSize:number = 4;
  totalRecords:number = 4;
  constructor(private podcastService:PodcastsService,
    private dialog:MatDialog){}
  
  ngOnInit(): void {
    this.getAPI('')
  }

  getAPI(search: string){
    this.podcastService
      .get(search, (this.pageIndex + 1), this.pageSize)
      .subscribe((response) => {
        this.allPodcasts = response.body as Podcasts[];
        this.totalRecords = response.headers.get('X-Total-Count')
          ? Number(response.headers.get('X-Total-Count'))
          : 0
      });
  }

  deleteItem(id: string) {
    const dialogRef = this.dialog.open(DeleteDialogPodcastComponent, {
      width: '250px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.allPodcasts = this.allPodcasts.filter((_) => _.id !== id);
      }
    });
  }

  textSearch(){
    this.getAPI(this.searchControl.value ?? '');
    console.log(' hello')
    console.log(this.searchControl.value)
  }

  handlePageEvent(n: boolean) {
    n == true ? this.pageIndex++ : this.pageIndex--
    if(this.pageIndex < 0) this.pageIndex++
    if(this.pageIndex >= (this.totalRecords / this.pageSize)) this.pageIndex--
    this.getAPI(this.searchControl.value ?? '');
  }
}
