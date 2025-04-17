// main-datos-comunidad.component.ts
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';

import { CommonModule } from '@angular/common';

interface ContadorItem {
  valor: number;
  titulo: string;
  clase: string;
}

@Component({
  selector: 'app-main-datos-comunidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-datos-comunidad.component.html',
  styleUrls: ['./main-datos-comunidad.component.css']
})
export class MainDatosComunidadComponent implements AfterViewInit{

  // Referencia a todos los elementos contador en el DOM
  @ViewChildren('contadorElement') contadorElements!: QueryList<ElementRef>;

  // Datos de los contadores
  contadores: (ContadorItem & { valorActual: number })[] = [
    { valor: 94, titulo: 'ESTUDIANTES EXITOSOS', clase: 'percentage', valorActual: 0 },
    { valor: 14, titulo: 'PROFESORES ACTUALES', clase: '', valorActual: 0 },
    { valor: 234, titulo: 'ESTUDIANTES NUEVOS', clase: 'new-students', valorActual: 0 },
    { valor: 6, titulo: 'PREMIOS', clase: '', valorActual: 0 }
  ];

  private observador: IntersectionObserver | null = null;
  private animacionesIniciadas = false;

  ngAfterViewInit() {
    this.iniciarObservadorDeVisibilidad();
  }

  private iniciarObservadorDeVisibilidad() {
    // Configuración del observador
    const opciones = {
      threshold: 0.1  // Se activará cuando al menos el 10% del elemento sea visible
    };

    // Crear el observador
    this.observador = new IntersectionObserver((entries) => {
      // Si cualquier entrada es visible y no se han iniciado las animaciones
      if (entries.some(entry => entry.isIntersecting) && !this.animacionesIniciadas) {
        this.iniciarAnimaciones();
        this.animacionesIniciadas = true;

        // Podemos desconectar el observador después de iniciar las animaciones
        if (this.observador) {
          this.observador.disconnect();
          this.observador = null;
        }
      }
    }, opciones);

    // Observar el primer elemento contador (podría ser cualquiera)
    const primerElemento = this.contadorElements.first.nativeElement;
    if (primerElemento) {
      this.observador.observe(primerElemento);
    }
  }

  private iniciarAnimaciones() {
    // Iniciar la animación para cada contador
    this.contadores.forEach((contador, index) => {
      this.animarContador(index, contador.valor);
    });
  }

  private animarContador(index: number, valorFinal: number) {
    const duracion = 3000; // 3 segundos, igual que en el código jQuery original
    const inicio = performance.now();
    const valorInicial = 0;

    const animar = (tiempoActual: number) => {
      const tiempoTranscurrido = tiempoActual - inicio;
      const progreso = Math.min(tiempoTranscurrido / duracion, 1);

      // Función de animación similar a 'swing' de jQuery
      const factorProgreso = this.easeInOutQuad(progreso);

      // Actualizar el valor del contador
      this.contadores[index].valorActual = Math.ceil(valorInicial + factorProgreso * (valorFinal - valorInicial));

      // Continuar la animación si no ha terminado
      if (progreso < 1) {
        requestAnimationFrame(animar);
      }
    };

    // Iniciar el ciclo de animación
    requestAnimationFrame(animar);
  }

  // Función similar al 'swing' de jQuery para la aceleración y deceleración
  private easeInOutQuad(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  ngOnDestroy() {
    // Limpieza al destruir el componente
    if (this.observador) {
      this.observador.disconnect();
      this.observador = null;
    }
  }

}
