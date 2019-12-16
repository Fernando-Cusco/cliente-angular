import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes/cliente';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  private cliente: Cliente = new Cliente();

  constructor() { }

  ngOnInit() {
  }

  crear() {
    console.log("Datos del usuario "+this.cliente);
    
  }

}
