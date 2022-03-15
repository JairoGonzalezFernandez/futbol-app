import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CentrocampistaComponent } from "./components/centrocampista/centrocampista.component";
import { DefensaComponent } from "./components/defensa/defensa.component";
import { DelanteroComponent } from "./components/delantero/delantero.component";
import { EntrenadorComponent } from "./components/entrenador/entrenador.component";
import { PorteroComponent } from "./components/portero/portero.component";

const routes: Routes = [

  {

    path:'',

    component:EntrenadorComponent,

    pathMatch:'full'

  },

  {

    path:'portero',

    component:PorteroComponent

  },

  {

    path:'defensa',

    component:DefensaComponent

  },

  {

    path:'centrocampista',

    component:CentrocampistaComponent

  },

  {

    path:'delantero',

    component:DelanteroComponent

  },

  {

    path:'**',

    redirectTo:''

  }

];



@NgModule({

  imports: [RouterModule.forRoot(routes),CommonModule],

  exports: [RouterModule]

})

export class AppRoutingModule { }
