import { Component, OnInit } from '@angular/core';
import { BackendService } from './../../backend/backend.service';

@Component({
  selector: 'app-lobitos',
  templateUrl: './lobitos.component.html',
  styleUrls: ['./lobitos.component.css', '../../styles/cardcontent.css']
})
export class LobitosComponent implements OnInit {
  public posts: any[];
  constructor(private backend: BackendService) {
    this.posts = this.backend.getPostsLobitos().subscribe( res => {
      this.posts = res;
    }, err => { console.log(err) } );
  }

  ngOnInit() {
  }

}
