import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) { }

  getPostsGeral(): any[] {
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

  getPostsLobitos(): any[] {
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

  getPostsExploradores(): any[] {
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

  getPostsPioneiros(): any[] {
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

  getPostsCaminheiros(): any[] {
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

  private makeGetRequest(options: any[], endpoint: string){
    return this.http.get('https://server.com/'+ endpoint);
  }
}
