import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caminheiros',
  templateUrl: './caminheiros.component.html',
  styleUrls: ['./caminheiros.component.css', '../../styles/cardcontent.css']
})
export class CaminheirosComponent implements OnInit {
  public posts: any[] = [
    {
      title: 'Title',
      author: 'João',
      date: 'Fevereiro',
      body: [
        {
          text: 'text here',
          image: '../assets/caminheiros_progresso.png'
        }
      ]
    },
    {
      title: 'Title',
      author: 'João',
      date: 'Fevereiro',
      body: [
        {
          text: 'text here',
          image: '../assets/caminheiros_progresso.png'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
