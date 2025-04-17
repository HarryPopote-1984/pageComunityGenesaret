import { Component, ViewEncapsulation, OnInit, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register, SwiperContainer } from 'swiper/element/bundle';


register();

interface TeamMember {
  name: string;
  position: string;
  image: string;
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
export class MainEquipoTrabajoComponent implements OnInit {
  @ViewChild('swiperContainer', { read: ElementRef })
  swiperContainerRef!: ElementRef;  // ← aquí se define


  // @ViewChild('swiperContainer') swiperContainerRef!: ElementRef<SwiperContainer>; // Referencia al elemento

  teamMembers: TeamMember[] = [
    {
      name: 'Miembro 1',
      position: 'Posición 1',
      image: 'assets/images/equipo_de_trabajo/imagen1.PNG'
    },
    {
      name: 'Miembro 2',
      position: 'Posición 2',
      image: 'assets/images/equipo_de_trabajo/imagen2.PNG'
    },
    {
      name: 'Miembro 3',
      position: 'Posición 3',
      image: 'assets/images/equipo_de_trabajo/imagen3.PNG'
    },
    {
      name: 'Miembro 4',
      position: 'Posición 4',
      image: 'assets/images/equipo_de_trabajo/imagen4.PNG'
    },
    {
      name: 'Miembro 5',
      position: 'Posición 4',
      image: 'assets/images/equipo_de_trabajo/imagen4.PNG'
    },
    {
      name: 'Miembro 6',
      position: 'Posición 4',
      image: 'assets/images/equipo_de_trabajo/imagen4.PNG'
    },
    {
      name: 'Miembro 7',
      position: 'Posición 4',
      image: 'assets/images/equipo_de_trabajo/imagen4.PNG'
    },
    {
      name: 'Miembro 8',
      position: 'Posición 4',
      image: 'assets/images/equipo_de_trabajo/imagen4.PNG'
    },
    {
      name: 'Miembro 9',
      position: 'Posición 4',
      image: 'assets/images/equipo_de_trabajo/imagen4.PNG'
    },
    {
      name: 'Miembro 9',
      position: 'Posición 4',
      image: 'assets/images/equipo_de_trabajo/imagen4.PNG'
    },
    {
      name: 'Miembro 10',
      position: 'Posición 4',
      image: 'assets/images/equipo_de_trabajo/imagen4.PNG'
    },
    {
      name: 'Miembro 11',
      position: 'Posición 4',
      image: 'assets/images/equipo_de_trabajo/imagen4.PNG'
    },
    {
      name: 'Miembro 12',
      position: 'Posición 4',
      image: 'assets/images/equipo_de_trabajo/imagen4.PNG'
    },
    {
      name: 'Miembro 13',
      position: 'Posición 4',
      image: 'assets/images/equipo_de_trabajo/imagen4.PNG'
    },
    {
      name: 'Miembro 14',
      position: 'Posición 4',
      image: 'assets/images/equipo_de_trabajo/imagen4.PNG'
    }
  ];

  ngOnInit() {
    // Inicialización básica
  }

  ngAfterViewInit() {
    const swiperEl = this.swiperContainerRef.nativeElement as any;
    Object.assign(swiperEl, {
      breakpoints: {
        320:  { slidesPerView: 1, spaceBetween: 20 },
        768:  { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 25 },
        1280: { slidesPerView: 4, spaceBetween: 30 },
      },
      autoplay: { delay: 3000, disableOnInteraction: false },
    });
    swiperEl.initialize();
  }

  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     const swiperEl = document.querySelector('swiper-container');
  //     if (swiperEl) {
  //       const swiperParams = {
  //         slidesPerView: 4,
  //         spaceBetween: 30,
  //         loop: true,
  //         effect: 'slide',
  //         autoplay: {
  //           delay: 3000,
  //           disableOnInteraction: false,
  //           pauseOnMouseEnter: true,
  //           enabled: true
  //         },
  //         navigation: {
  //           enabled: true
  //         },
  //         breakpoints: {
  //           320: {
  //             slidesPerView: 1,
  //             spaceBetween: 20
  //           },
  //           768: {
  //             slidesPerView: 2,
  //             spaceBetween: 20
  //           },
  //           1024: {
  //             slidesPerView: 3,
  //             spaceBetween: 25
  //           },
  //           1280: {
  //             slidesPerView: 4,
  //             spaceBetween: 30
  //           }
  //         }
  //       };

  //       Object.assign(swiperEl, swiperParams);
  //       // @ts-ignore
  //       swiperEl.initialize();
  //     }
  //   }, 0);
  // }
}
