import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) { }

  getPostsGeral(): any {
    return this.makeGetRequest({
      entidade: 'noticia',
      ativa:1,
      seccao:4
    });
  }

  getPostsLobitos(): any {
    return this.makeGetRequest({
      entidade: 'noticia',
      ativa:1,
      seccao:1
    });
  }

  getPostsExploradores(): any {
    return this.makeGetRequest({
      entidade: 'noticia',
      ativa:1,
      seccao:2
    });
  }

  getPostsPioneiros(): any {
    return this.makeGetRequest({
      entidade: 'noticia',
      ativa:1,
      seccao:3
    });
  }

  getPostsCaminheiros(): any {
    return this.makeGetRequest({
      entidade: 'noticia',
      ativa:1,
      seccao:4
    });
  }

  private makeGetRequest(options): any{
    let opt: string;
    console.log(options);
    opt='?';
    Object.entries(options).forEach(
      ([key, value]) => opt += key + '=' + value + '&'
    );
    console.log('https://agr10.flickstuff.com/backoffice/backend.php'+opt.slice(0, -1));
    return this.http.get('https://agr10.flickstuff.com/backoffice/backend.php'+opt.slice(0, -1));
  }
}
