import { Injectable } from '@angular/core';
import { Certification } from '../models/certification';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {
  certificactions: Certification[] = [
    {
      icon: '🛡️',
      content: [
        { 
          name:'Certificación en Seguridad Informática', 
          issuer: 'Plataforma OTI UNI', 
          date: new Date('2025-09-05'), 
          description: 'Fundamentos de ciberseguridad, análisis de vulnerabilidades y técnicas de pentesting.', 
          skills: [ 
            { skill: 'Pentesting'}
          ]
        }
      ]
    },
    {
      icon: '🛡️',
      content: [
        { 
          name:'Web Development Fundamentals', 
          issuer: 'Academia Online', 
          date: new Date('2025-01-11'), 
          description: 'Desarrollo web con HTML, CSS, JavaScript.', 
          skills: [ 
            { skill: 'HTML/CSS'},
            { skill: 'JavaScript'},
          ]
        }
      ]
    },
  ];

  constructor() {}

  getCertifications() : Certification[] {
    return this.certificactions;
  }
}
