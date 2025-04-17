import { Component } from '@angular/core';
import { HeaderHomeComponent } from "../../shared/header-home/header-home.component";
import { FooterHomeComponent } from "../../shared/footer-home/footer-home.component";
import { MainServiceComponent } from "../../components/main-service/main-service.component";
import { MainBannerComponent } from "../../components/main-banner/main-banner.component";
import { MainConocenosComponent } from "../../components/main-conocenos/main-conocenos.component";
import { MainQuienesSomosComponent } from "../../components/main-quienes-somos/main-quienes-somos.component";
import { MainEquipoTrabajoComponent } from "../../components/main-equipo-trabajo/main-equipo-trabajo.component";
import { MainDatosComunidadComponent } from "../../components/main-datos-comunidad/main-datos-comunidad.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderHomeComponent,
    FooterHomeComponent,
    MainServiceComponent,
    MainBannerComponent,
    MainConocenosComponent,
    MainQuienesSomosComponent,
    MainEquipoTrabajoComponent,
    MainDatosComunidadComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent { }
