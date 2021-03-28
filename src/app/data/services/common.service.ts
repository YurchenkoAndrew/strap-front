import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class CommonService<T> {

  private readonly url: string;

  constructor(url: string, private httpClient: HttpClient) {
    this.url = url;
  }

  get(id: number): Observable<T> {
    return this.httpClient.get<T>(this.url + '/' + id);
  }

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.url);
  }
}
