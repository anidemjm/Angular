import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  /**
   * Metodo que permite guardar un posts
   * @param post post
   */
  savePost(post: Post): Observable<any> {
    var listaPost = [];
    /**
     * Validamos si existen posts y los obtenemos para agregar el nuevo posts
     * y retornamos TRUE
     */
    if (localStorage.getItem('posts')) {
      let localPosts = JSON.parse(localStorage.getItem('posts'));
      localPosts.push(post);
      localStorage.setItem('posts', JSON.stringify(localPosts));

      return Observable.of(true);
    }

    listaPost.push(post);
    localStorage.setItem('posts', JSON.stringify(listaPost));
    return Observable.of(true);
  }

  /**
   * Metodo que permite obtener todos los posts creados
   */
  getAllPosts(): Observable<any> {
    let localPosts = JSON.parse(localStorage.getItem('posts'));
    return Observable.of(localPosts);
  }
}
