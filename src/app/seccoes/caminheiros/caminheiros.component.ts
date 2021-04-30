import { Component, OnInit } from '@angular/core';
import { BackendService } from './../../backend/backend.service';

@Component({
  selector: 'app-caminheiros',
  templateUrl: './caminheiros.component.html',
  styleUrls: ['./caminheiros.component.css', '../../styles/cardcontent.css']
})
export class CaminheirosComponent implements OnInit {
  public posts: any[];
  constructor(private backend: BackendService) {
    this.posts = this.backend.getPostsCaminheiros();
  }

  ngOnInit() {
  }

}
