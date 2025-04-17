import { Component, ViewEncapsulation, OnInit, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

interface TeamMember {
  name: string;
  position: string;
  image: string;
  description?: string; // Added description field
}

@Component({
  selector: 'app-main-equipo-trabajo',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './main-equipo-trabajo.component.html',
  styleUrls: ['./main-equipo-trabajo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainEquipoTrabajoComponent implements OnInit, AfterViewInit {

  @ViewChild('swiperEl') swiperContainerRef!: ElementRef;

  teamMembers: TeamMember[] = [
    {
      name: 'Miembro 1',
      position: 'Posición 1',
      image: 'assets/images/equipo_de_trabajo/imagen1.PNG',
      description: 'Morbi in libero blandit lectus cursus'
    },
    {
      name: 'Miembro 2',
      position: 'Posición 2',
      image: 'assets/images/equipo_de_trabajo/imagen2.PNG',
      description: 'Curabitur molestie dignissim purus'
    },
    {
      name: 'Miembro 3',
      position: 'Posición 2',
      image: 'assets/images/equipo_de_trabajo/imagen3.PNG',
      description: 'Curabitur molestie dignissim purus'
    },
    {
      name: 'Miembro 4',
      position: 'Posición 2',
      image: 'assets/images/equipo_de_trabajo/imagen4.PNG',
      description: 'Curabitur molestie dignissim purus'
    },
    {
      name: 'Miembro 4',
      position: 'Posición 2',
      image: 'assets/images/equipo_de_trabajo/imagen5.PNG',
      description: 'Curabitur molestie dignissim purus'
    },
    {
      name: 'Miembro 5',
      position: 'Posición 2',
      image: 'assets/images/equipo_de_trabajo/imagen6.PNG',
      description: 'Curabitur molestie dignissim purus'
    },
    {
      name: 'Miembro 6',
      position: 'Posición 2',
      image: 'assets/images/equipo_de_trabajo/imagen7.PNG',
      description: 'Curabitur molestie dignissim purus'
    },
    {
      name: 'Miembro 7',
      position: 'Posición 2',
      image: 'assets/images/equipo_de_trabajo/imagen8.PNG',
      description: 'Curabitur molestie dignissim purus'
    },
    {
      name: 'Miembro 8',
      position: 'Posición 2',
      image: 'assets/images/equipo_de_trabajo/imagen9.PNG',
      description: 'Curabitur molestie dignissim purus'
    },
    {
      name: 'Miembro 9',
      position: 'Posición 2',
      image: 'assets/images/equipo_de_trabajo/imagen10.PNG',
      description: 'Curabitur molestie dignissim purus'
    },
    {
      name: 'Miembro 11',
      position: 'Posición 2',
      image: 'assets/images/equipo_de_trabajo/imagen11.PNG',
      description: 'Curabitur molestie dignissim purus'
    },
    {
      name: 'Miembro 12',
      position: 'Posición 2',
      image: 'assets/images/equipo_de_trabajo/imagen12.PNG',
      description: 'Curabitur molestie dignissim purus'
    },
    {
      name: 'Miembro 13',
      position: 'Posición 2',
      image: 'assets/images/equipo_de_trabajo/imagen13.PNG',
      description: 'Curabitur molestie dignissim purus'
    },
    {
      name: 'Miembro 14',
      position: 'Posición 2',
      image: 'assets/images/equipo_de_trabajo/imagen14.PNG',
      description: 'Curabitur molestie dignissim purus'
    }

    // Add descriptions to all your team members
    // ...rest of team members
  ];

  ngOnInit() {
    // Inicialización básica
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const swiperEl = this.swiperContainerRef.nativeElement;

      // Configuración del Swiper
      const swiperParams = {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          clickable: true,
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }
      };

      // Asignar los parámetros al elemento Swiper
      Object.assign(swiperEl, swiperParams);

      // Inicializar Swiper
      swiperEl.initialize();
    }, 100);
  }
}
