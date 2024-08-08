import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'https://picsum.photos/200/300/?random';
  constructor(private http: HttpClient) { }

  getRandomImage(): Observable<Blob> {
    return this.http.get(this.apiUrl, {responseType: 'blob'});
  }
}
