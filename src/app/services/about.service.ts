import { Injectable } from '@angular/core';
import { AboutHighlight } from '../models/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private descriptions: string[] = [
    'Soy un estudiante apasionado por la informática, especialmente por la programación y la seguridad informática.',
    'Me enfoco en el desarrollo web, con un interés particular en el backend y la lógica de los sistemas.',
    'Disfruto diseñar estructuras eficientes y seguras.',
    'Valoro el aprendizaje continuo, por lo que dedico tiempo a leer sobre nuevas tecnologías.',
    'En mis ratos libres disfruto jugar en línea con amigos, manteniendo un equilibrio entre estudio y entretenimiento.'
  ];

  private highlights: AboutHighlight[] = [ 
    { amount: 3, text: 'Certificaciones'},
    { amount: 1, text: 'Proyecto'},
    { amount: 2, text: 'Años de estudio'},
  ]

  constructor() {}

  getDescriptions() : Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.descriptions);
      }, 2000);
    });
  }

  getHighlights() : Promise<AboutHighlight[]> {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(this.highlights);
      }, 2000);
    });
  }
}
