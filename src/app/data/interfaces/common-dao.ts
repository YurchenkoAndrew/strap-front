import {Observable} from 'rxjs';

export interface CommonDao<T> {
  // Получаем все заначения
  getAll(): Observable<T[]>;

  // Получаем одно значение по ID
  get(id: number): Observable<T>;
}
