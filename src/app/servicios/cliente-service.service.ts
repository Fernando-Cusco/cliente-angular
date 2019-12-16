import { Injectable } from '@angular/core';
import { Cliente } from '../componentes/clientes/cliente';
import { CLIENTES } from '../componentes/clientes/clientes.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor() { }


  getClientes(): Observable<Cliente[]> {
    return of(CLIENTES);
  }
}
