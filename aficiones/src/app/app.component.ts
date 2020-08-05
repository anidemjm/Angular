import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hobbies: any[];

  constructor() {
    this.hobbies = [
      { nombre: 'Silvester Stalone', aficion: 'No siento las piernas' },
      { nombre: 'Pepe Villuela', aficion: 'Enredarse en al silla' }
    ];
  }

  onSaveHobbie($event): void {
    this.hobbies.push($event);
  }

}
