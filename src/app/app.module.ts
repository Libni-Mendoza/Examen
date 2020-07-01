import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaludarComponent } from './componentes/saludar.component';

import { TareasComponent } from './tareas/tareas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotasComponent } from './notas/notas.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SaludarComponent,
    TareasComponent,
    NavbarComponent,
    NotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
