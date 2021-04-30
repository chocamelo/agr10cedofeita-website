import { Component, OnInit } from '@angular/core';
import { BackendService } from './../../backend/backend.service';

@Component({
  selector: 'app-pioneiros',
  templateUrl: './pioneiros.component.html',
  styleUrls: ['./pioneiros.component.css', '../../styles/cardcontent.css']
})
export class PioneirosComponent implements OnInit {
  public posts: any[];
  constructor(private backend: BackendService) {
    this.posts = this.backend.getPostsPioneiros();
  }

  ngOnInit() {
  }

}
