import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  public searchText;
  public posts: Post[];
  public postTemp: Post[];

  constructor(private _postService: PostService) {}

  ngOnInit() {
    this.getPosts();
  }

  /**
   * Metodo que permite obtener los posts
   */
  public getPosts() {
    this._postService.getAllPosts().subscribe(
      (response) => {
        if (response) {
          this.posts = response;
          this.postTemp = response;
        }
        //console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Metodo que permite buscar por categoria
   */
  searchItems(value: string) {
    const filterValue = value.toLowerCase();
    if (filterValue) {
      this.posts = this.postTemp.filter((option) =>
        option.categoria.toLowerCase().includes(filterValue)
      );
    } else {
      this.getPosts();
    }
  }
}
