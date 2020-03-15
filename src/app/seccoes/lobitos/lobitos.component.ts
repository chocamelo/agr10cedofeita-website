import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lobitos',
  templateUrl: './lobitos.component.html',
  styleUrls: ['./lobitos.component.css', '../../styles/cardcontent.css']
})
export class LobitosComponent implements OnInit {
  public posts: any[] = [
    {
      title: 'Title',
      author: 'João',
      date: 'Fevereiro',
      body: [
        {
          text: 'text here',
          image: '../assets/lobitos_progresso.png'
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
          image: '../assets/lobitos_progresso.png'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
