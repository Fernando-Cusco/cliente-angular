import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {
      id: 1,
      nombres: 'Braulio Fernando',
      apellidos: 'Cusco Mejia',
      email: 'admin@admin.com',
      createAt: '2019-12-15'
    },
    {
      id: 2,
      nombres: 'Braulio Fernando',
      apellidos: 'Cusco Mejia',
      email: 'admin@admin.com',
      createAt: '2019-12-15'
    },
    {
      id: 3,
      nombres: 'Braulio Fernando',
      apellidos: 'Cusco Mejia',
      email: 'admin@admin.com',
      createAt: '2019-12-15'
    },
    {
      id: 4,
      nombres: 'Braulio Fernando',
      apellidos: 'Cusco Mejia',
      email: 'admin@admin.com',
      createAt: '2019-12-15'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
