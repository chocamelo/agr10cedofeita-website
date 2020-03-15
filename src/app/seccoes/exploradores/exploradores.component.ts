import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exploradores',
  templateUrl: './exploradores.component.html',
  styleUrls: ['./exploradores.component.css', '../../styles/cardcontent.css']
})
export class ExploradoresComponent implements OnInit {
  public posts: any[] = [
    {
      title: 'Title',
      author: 'João',
      date: 'Fevereiro',
      body: [
        {
          text: 'text here',
          image: '../assets/exploradores_progresso.png'
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
          image: '../assets/exploradores_progresso.png'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
