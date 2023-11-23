import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HomeComponent } from './screens/home/home.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { ContactoComponent } from './screens/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TablaComponent,
    GaleriaComponent,
    HomeComponent,
    ProductosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
