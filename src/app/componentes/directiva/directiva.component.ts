import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  listaCurso: string[] = ['Java', 'Python', 'Php', 'Ionic',  'Angular']

  habilitar: boolean = true;
  c: number = 1;
  valorBtn: string = "Ocultar"

  constructor() { }

  ngOnInit() {
  }

  show() {
    if(this.c%2 == 0) {
      this.habilitar = true;
      this.valorBtn = "Ocultar";
    } else {
      this.habilitar = false;
      this.valorBtn = "Mostrar";
    }
    this.c++;
  }

}
