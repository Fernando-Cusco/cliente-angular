import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes/cliente';
import { ClienteServiceService } from '../../servicios/cliente-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private service: ClienteServiceService,
    private router: Router,
    private actRouter: ActivatedRoute) { }

  ngOnInit() {
    this.buscarCliente();
  }

  crear() {
    console.log("Datos del usuario " + this.cliente.nombres);
    this.service.crearCliente(this.cliente).subscribe(
      reponse => {
        this.router.navigate(['/clientes'])
        swal.fire('Cliente Guardado', `Cliente ${this.cliente.nombres} creado con exito`, 'success');
      }
    );
  }


  buscarCliente() {
    //obtenemos el id que llega por la url mediante un obeservable
    this.actRouter.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.service.getCliente(id).subscribe(cliente => {
          this.cliente = cliente;
        });
      }
    })
  }

  actualizarCliente() {
    this.service.actualizar(this.cliente).subscribe(cliente => {
      this.router.navigate(['/clientes'])
      swal.fire('Cliente Actualizado', `Cliente ${this.cliente.nombres} ha sido actualizado con exito`, 'success');
    });
  }

}
