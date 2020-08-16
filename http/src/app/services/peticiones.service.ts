import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeticionesService {
  constructor(private httpClient: HttpClient) {}

  getAllPost(): Promise<any[]> {
    return this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .toPromise();
  }
}
