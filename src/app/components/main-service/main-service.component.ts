import { Component, ViewEncapsulation, OnInit, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

// Registrar Swiper elementos personalizados
register();

interface Service {
  iconSrc: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-main-service',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './main-service.component.html',
  styleUrl: './main-service.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MainServiceComponent implements OnInit, AfterViewInit {
  services: Service[] = [
    {
      iconSrc: 'assets/images/service-icon-01.png',
      title: 'Educación Certificada',
      description: 'Estudios validados según Decreto 2272 del 2007, Mineduc.'
    },
    {
      iconSrc: 'assets/images/service-icon-02.png',
      title: 'Aprendizaje Flexible',
      description: 'Modalidad exámenes libres.'
    },
    {
      iconSrc: 'assets/images/service-icon-03.png',
      title: 'Formación Oficial',
      description: 'Contenidos académicos exigibles por Mineduc.'
    },
    {
      iconSrc: 'assets/images/service-icon-02.png',
      title: 'Modelo Integrado',
      description: 'Funcionamiento multigrado de acuerdo con matricula.'
    },
    {
      iconSrc: 'assets/images/service-icon-03.png',
      title: 'Fe Viva',
      description: 'Buscar y promover un encuentro con Cristo.'
    },
    {
      iconSrc: 'assets/images/service-icon-03.png',
      title: 'Formación Espiritual',
      description: 'Discipular en los principios que declara la biblia.'
    },
    {
      iconSrc: 'assets/images/service-icon-03.png',
      title: 'Crecimiento Infantil',
      description: 'Talleres de Discipulado para niños.'
    },
    {
      iconSrc: 'assets/images/service-icon-03.png',
      title: 'Actividades Personalizadas',
      description: 'Talleres extracurriculares de acuerdo con necesidades.'
    }
  ];

  ngOnInit() {
    // Inicialización básica
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const swiperEl = document.querySelector('swiper-container');
      if (swiperEl) {
        const swiperParams = {
          slidesPerView: 4,
          spaceBetween: 30,
          loop: true,
          effect: 'slide',
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            enabled: true
          },
          navigation: {
            enabled: true
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }
        };

        Object.assign(swiperEl, swiperParams);
        // @ts-ignore
        swiperEl.initialize();
      }
    }, 0);
  }
}
