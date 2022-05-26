import { Component } from '@angular/core';
import { Hero } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-assignment';
  hero:Hero[] = [{     
    img: 'https://itakon.it/wp-content/uploads/2020/09/the-batman-ben-affleck-not-starring.jpg',
    name: 'Batman',
    ability: [
        'Intimidazione',
        'Interrogatorio',
        'Intelletto',
        'Arti marziali',
        'Armi tecnologiche',
    ]
  }


  ]
}
