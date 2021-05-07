import { BackendService } from './../backend/backend.service';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../styles/cardcontent.css']
})
export class DashboardComponent implements OnInit {
  public posts: any[];

  constructor(@Inject(DOCUMENT) private document: Document, private backend: BackendService) {
    this.posts = this.backend.getPostsGeral();
    console.log(this.posts);
  }
  ngOnInit() {
  }


}
