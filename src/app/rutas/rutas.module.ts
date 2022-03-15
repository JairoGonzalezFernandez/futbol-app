import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorteroComponent } from '../components/portero/portero.component';
import { DefensaComponent } from '../components/defensa/defensa.component';
import { CentrocampistaComponent } from '../components/centrocampista/centrocampista.component';
import { DelanteroComponent } from '../components/delantero/delantero.component';
import { EntrenadorComponent } from '../components/entrenador/entrenador.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PorteroComponent,
    DefensaComponent,
    CentrocampistaComponent,
    DelanteroComponent,
    EntrenadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    CommonModule,
    PorteroComponent,
    DefensaComponent,
    CentrocampistaComponent,
    DelanteroComponent,
    EntrenadorComponent

  ]
})
export class RutasModule { }
