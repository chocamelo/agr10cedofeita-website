import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../styles/cardcontent.css']
})
export class DashboardComponent implements OnInit {

  public posts: any[] = [
    {
      title: 'Title',
      author: 'João',
      date: 'Fevereiro',
      body: [
        {
          text: 'text here',
          image: '../assets/13336202_1204008246285474_1238944268_n.jpg'
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
          image: '../assets/13336202_1204008246285474_1238944268_n.jpg'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
