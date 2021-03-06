import { Injectable } from '@angular/core';
import { Cliente } from '../componentes/clientes/cliente';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private url: string = "http://localhost:8080/api/clientes";

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }


  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  crearCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente, {headers: this.httpHeaders});
  }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }

  actualizar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.url}/${cliente.id}`, cliente, {headers: this.httpHeaders});
  }

  eliminar(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.url}/${id}`, {headers: this.httpHeaders});
  }

}
