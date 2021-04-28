import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private sanitizer: DomSanitizer) { }

  getPosts(seccao: string): any[] {
    switch (seccao) {
      case 'lobitos': {
        break;
      }
      case 'exploradores': {
        break;
      }
      case 'pioneiros': {
        break;
      }
      case 'caminheiros': {
        break;
      }
      case 'agrupamento': {
        return [
          {
            id: 'post1',
            title: 'Title',
            author: 'João',
            date: 'Fevereiro',
            body: this.sanitizer.bypassSecurityTrustHtml('<p>henlo</p><img style="display: block; margin-left: auto; margin-right: auto; width: 50%; text-align: center;" src="../assets/13336202_1204008246285474_1238944268_n.jpg">')
          },
          {
            id: 'post2',
            title: 'Title',
            author: 'João',
            date: 'Fevereiro',
            body: this.sanitizer.bypassSecurityTrustHtml('<p>henlo</p><img style="display: block; margin-left: auto; margin-right: auto; width: 50%; text-align: center;" src="../assets/13336202_1204008246285474_1238944268_n.jpg">')
          }
        ];
      }
      default: {
        //statements; 
        break;
      }
    }
  }
}
