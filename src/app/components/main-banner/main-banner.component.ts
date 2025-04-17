import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  standalone: true,
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.css'
})
export class MainBannerComponent implements AfterViewInit, OnInit {
  @ViewChild('bgVideo') videoElement!: ElementRef<HTMLVideoElement>;

  ngOnInit() {
    // Inicialización del componente
    document.addEventListener('DOMContentLoaded', () => {
      this.initializeVideo();
    });
  }

  ngAfterViewInit() {
    this.initializeVideo();
  }

  private initializeVideo() {
    if (this.videoElement?.nativeElement) {
      const video = this.videoElement.nativeElement;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      // Intenta reproducir el video
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video reproduciendo correctamente');
          })
          .catch(error => {
            console.warn('Error al reproducir el video:', error);
            // Intenta reproducir nuevamente después de un breve retraso
            setTimeout(() => {
              video.play().catch(e => console.warn('Segundo intento fallido:', e));
            }, 1000);
          });
      }
    }
  }
}
