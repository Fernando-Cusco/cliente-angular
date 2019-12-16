import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteServiceService } from '../../servicios/cliente-service.service';
import swal from 'sweetalert2';

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

  eliminarCliente(cliente: Cliente) {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Seguro deseas eliminar?',
      text: `Cliente ${cliente.nombres} ${cliente.apellidos} se eliminara!!!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.service.eliminar(cliente.id).subscribe(response => {
          this.clientes = this.clientes.filter(cli => cli !== cliente)
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            `Cliente ${cliente.nombres} ${cliente.apellidos} ha sido eliminado!!!`,
            'success'
          )
        })

      }
    })
  }

}
