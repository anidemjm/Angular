import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [PostService],
})
export class FormularioComponent implements OnInit {
  public title: string;
  public post: Post;
  public status: string;

  constructor(private _postService: PostService, private _router: Router) {
    this.title = 'Crear Post';
    this.post = new Post('', '', '', '', '', '');
  }
  ngOnInit() {}

  /**
   * Metodo que permite enviar el formulario y guardar la informacion
   * @param form Formulario
   */
  onSubmit(form) {
    // Guardar Datos
    this._postService.savePost(this.post).subscribe(
      (response) => {
        if (response) {
          this.status = 'success';
          this._router.navigate(['/posts']);
        } else {
          this.status = 'failed';
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
