import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ModulosComponent } from './modulos/modulos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { RouterModule } from '@angular/router';

const rutas = [
  {path: 'calendario', component: CalendarioComponent},
  {path: 'modulos', component: ModulosComponent},
  {path: 'profesores', component: ProfesoresComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    CalendarioComponent,
    ModulosComponent,
    ProfesoresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
