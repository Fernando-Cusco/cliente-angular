import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteServiceService } from '../../servicios/cliente-service.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private service: ClienteServiceService) { }

  ngOnInit() {
    this.service.getClientes().subscribe(
      response => {
        this.clientes = response;
      },
    );
  }

}
