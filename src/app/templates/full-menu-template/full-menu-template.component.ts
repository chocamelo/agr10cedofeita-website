import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-full-menu-template',
  templateUrl: './full-menu-template.component.html',
  styleUrls: ['./full-menu-template.component.css', './navbar.css', '../../styles/cardcontent.css']
})
export class FullMenuTemplateComponent implements OnInit {

  menu: boolean;
  scrHeight: any;
  scrWidth: number;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  }

  constructor() {
    this.menu = true;
    this.getScreenSize();
  }

  scrollTop(event) {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
  }

  showMenu() {
    if (this.scrWidth < 830) {
      let str: string;
      if (this.menu) {
        const elems: any = document.getElementsByTagName('li');
        for (const elem of elems) {
          str = elem.className;
          console.log(str);
          if (str.includes('route')) {
            elem.setAttribute('style', 'display: table-cell; visibility: visible; width: 100%;');
          }
        }
      } else {
        const elems: any = document.getElementsByTagName('li');
        for (const elem of elems) {
          str = elem.className;
          if (str.includes('route')) {
            elem.setAttribute('style', 'visibility: hidden; display: none; width: 0%;');
          }
        }
      }
      this.menu = !this.menu;
    }
  }
}
