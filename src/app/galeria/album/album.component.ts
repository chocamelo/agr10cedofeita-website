import { Component, OnInit, Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: [
    './album.component.css',
    '../../styles/cardcontent.css'
  ]
})
export class AlbumComponent implements OnInit {

  albumName: string;
  IMAGES: Array<string>;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.albumName = this.document.location.href.match('(?<=galeria/).*$')[0];
    this.IMAGES = [
      'http://agr10.flickstuff.com/assets/'+this.albumName+'/pass1.jpg',
      'http://agr10.flickstuff.com/assets/'+this.albumName+'/pass2.jpg',
      'http://agr10.flickstuff.com/assets/'+this.albumName+'/pass3.jpg',
      'http://agr10.flickstuff.com/assets/'+this.albumName+'/pass4.jpg',
      'http://agr10.flickstuff.com/assets/'+this.albumName+'/pass5.jpg'
    ];
  }

  ngOnInit() {
  }

}
