import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DirectivaComponent } from './componentes/directiva/directiva.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ClienteServiceService } from './servicios/cliente-service.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/clientes',
    pathMatch: 'full'
  },
  {
    path: 'directivas',
    component: DirectivaComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
