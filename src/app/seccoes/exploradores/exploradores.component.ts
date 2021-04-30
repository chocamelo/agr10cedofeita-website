import { Component, OnInit } from '@angular/core';
import { BackendService } from './../../backend/backend.service';

@Component({
  selector: 'app-exploradores',
  templateUrl: './exploradores.component.html',
  styleUrls: ['./exploradores.component.css', '../../styles/cardcontent.css']
})
export class ExploradoresComponent implements OnInit {
  public posts: any[];
  constructor(private backend: BackendService) {
    this.posts = this.backend.getPostsExploradores();
  }

  ngOnInit() {
  }

}
