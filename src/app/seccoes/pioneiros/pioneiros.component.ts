import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pioneiros',
  templateUrl: './pioneiros.component.html',
  styleUrls: ['./pioneiros.component.css', '../../styles/cardcontent.css']
})
export class PioneirosComponent implements OnInit {
  public posts: any[] = [
    {
      title: 'Title',
      author: 'João',
      date: 'Fevereiro',
      body: [
        {
          text: 'text here',
          image: '../assets/pioneiros_progresso.png'
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
          image: '../assets/pioneiros_progresso.png'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
