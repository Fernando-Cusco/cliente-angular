import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes/cliente';
import { ClienteServiceService } from '../../servicios/cliente-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private service: ClienteServiceService, private router: Router) { }

  ngOnInit() {
  }

  crear() {
    console.log("Datos del usuario "+this.cliente.nombres);
    this.service.crearCliente(this.cliente).subscribe(
      reponse => {
        this.router.navigate(['/clientes']);
      }
    )
  }

}
