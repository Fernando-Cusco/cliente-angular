import { Injectable } from '@angular/core';
import { Cliente } from '../componentes/clientes/cliente';
import { CLIENTES } from '../componentes/clientes/clientes.json';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor() { }


  getClientes(): Cliente[] {
    return CLIENTES;
  }
}
