import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a angular';

  curso: string = 'Curso Angular 8 - Spring 5';
  alumno: string = 'Alumno: Fernando Cusco';
  fecha: string = "2019-12-12";
}
