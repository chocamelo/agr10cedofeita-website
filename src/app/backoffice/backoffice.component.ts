import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css', '../styles/cardcontent.css']
})
export class BackofficeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const token:string = prompt('Are you sure to delete');
    if(token != null){
      console.log(token);
    }
  }

}
