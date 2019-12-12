import { Component, OnInit, Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css', '../../styles/cardcontent.css']
})
export class AlbumComponent implements OnInit {

  albumName: string;

  constructor(@Inject(DOCUMENT) private document: Document) { 
    console.log(this.document.location.href);
    this.albumName = this.document.location.href.match('(?<=galeria/).*$')[0];
    console.log(this.albumName);
}

  ngOnInit() {
  }

}
