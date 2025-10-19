import { Injectable } from '@angular/core';
import { AboutDescription } from '../models/about-description';

@Injectable({
  providedIn: 'root'
})
export class AboutDescriptionService {
  aboutDescription: AboutDescription[] = [
    'Soy un estudiante apasionado por el mundo de la informática, especialmente interesado en la programación y la seguridad informática. Mi curiosidad me lleva a explorar constantemente nuevas tecnologías y metodologías en el campo del desarrollo de software.',
    'Mi enfoque principal está en el desarrollo web y la ciberseguridad, donde combino creatividad con análisis técnico profundo. Me fascina entender cómo funcionan los sistemas y cómo se pueden mejorar o proteger.',
    'En mi tiempo libre disfruto de la lectura, ya que considero que el aprendizaje continuo es fundamental en el campo tecnológico. También me gusta jugar en línea con mis amigos, lo que me permite mantener un equilibrio saludable entre el estudio y el entretenimiento.'
  ];

  constructor() {}

  getAboutDescription() : AboutDescription[] {
    return this.aboutDescription;
  }
}
