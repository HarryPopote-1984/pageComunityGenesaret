import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-quienes-somos',
  standalone: true,
  imports: [
    CommonModule,
    NgbAccordionModule,
    NgbCollapseModule
  ],
  templateUrl: './main-quienes-somos.component.html',
  styleUrl: './main-quienes-somos.component.css'
})
export class MainQuienesSomosComponent {
  items = [
    {
      title: 'Formación Integral',
      content: 'Promovemos una educación que va más allá de lo académico, formando individuos responsables, éticos y con una sólida base espiritual, guiados por una comunidad educativa que trabaja unida para el crecimiento personal y colectivo.'
    },
    {
      title: 'Amor a Dios',
      content: 'El amor a Dios es el principio fundamental que inspira todas nuestras acciones. Enseñamos a nuestros estudiantes a vivir su fe y a manifestarla en cada aspecto de su vida, buscando siempre honrarlo y seguir sus enseñanzas.'
    },
    {
      title: 'Competencias Académicas y Principios Divinos',
      content: 'Fomentamos la excelencia académica, integrando los principios divinos en el proceso de aprendizaje, para que nuestros estudiantes no solo busquen el conocimiento, sino también el propósito de servir a Dios y a su comunidad.'
    },
    {
      title: 'Descubrimiento y Servicio',
      content: 'Apoyamos a cada estudiante a descubrir sus talentos y habilidades, incentivando su participación en actividades que les permitan servir a los demás y contribuir positivamente a la sociedad, siempre con el amor y el compromiso hacia Dios como guía.'
    }
  ];
}

