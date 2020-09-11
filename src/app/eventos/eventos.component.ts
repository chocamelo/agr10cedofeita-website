import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css', '../styles/cardcontent.css']
})
export class EventosComponent implements OnInit {
  public calendar: any[] = [
    {
      name: 'Dezembro',
      events: [
        {
          day: '14',
          description: 'Ultima reunião do ano!',
          lobitos: true,
          exploradores: false,
          pioneiros: false,
          caminheiros: false
        }
      ]
    },
    {
      name: 'Janeiro',
      events: [
        {
          day: '4',
          description: 'Conga e Encargos',
          lobitos: true,
          exploradores: true,
          pioneiros: true,
          caminheiros: true
        },
        {
          day: '11 a 12',
          description: 'Acantonamento dos Lobitos!',
          lobitos: true,
          exploradores: false,
          pioneiros: false,
          caminheiros: false
        },
        {
          day: 'O mês todo',
          description: 'Janeiras!',
          lobitos: true,
          exploradores: true,
          pioneiros: true,
          caminheiros: true
        }
      ]
    }
  ];
  ngOnInit() {

  }

}
