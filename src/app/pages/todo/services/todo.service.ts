import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getList() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
  }
  delete(id: any) {
    return this.httpClient.delete('https://jsonplaceholder.typicode.com/todos/' + id)
  }
  add(data: any) {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/todos', data)
  }
  update(data: any, id: any) {
    return this.httpClient.put('https://jsonplaceholder.typicode.com/todos/' + id, data)
  }

}
