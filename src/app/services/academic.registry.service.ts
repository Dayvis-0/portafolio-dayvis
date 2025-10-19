import { Injectable } from '@angular/core';
import { Cycle } from '../models/academic-registry';

@Injectable({
  providedIn: 'root'
})

export class AcademicRegistryService {
  academicRegistry: Cycle[] = [
    {
      title: 'Ciclo I',
      course: [
        { name: 'REDACCIÓN UNIVERSITARIA Y ORATORIA', status: 'Cumplido', credits: 3},
        { name: 'INGLÉS', status: 'Cumplido', credits: 3},
        { name: 'REALIDAD REGIONAL Y NACIONAL', status: 'Cumplido', credits: 3},
        { name: 'EXPRESIÓN ARTISTICA', status: 'Cumplido', credits: 3},
        { name: 'DIBUJO DE INGENIERÍA', status: 'Cumplido', credits: 3},
        { name: 'MATEMÁTICA BÁSICA I', status: 'Cumplido', credits: 4},
        { name: 'INTRODUCCIÓN A LA INGENIERÍA DE SISTEMAS', status: 'Cumplido', credits: 3},
      ]
    },
    {
      title: 'Ciclo II',
      course: [
        { name: 'MATEMÁTICA DISCRETA', status: 'Cumplido', credits: 3},
        { name: 'INGLÉS TÉCNICO', status: 'Cumplido', credits: 3},
        { name: 'INGENIERÍA ECONÓMICA', status: 'Cumplido', credits: 4},
        { name: 'MATEMÁTICA BÁSICA II', status: 'Cumplido', credits: 4},
        { name: 'CÁLCULO DIFERENCIAL E INTEGRAL', status: 'Cumplido', credits: 5},
        { name: 'METODOLOGÍA DE LA PROGRAMACIÓN', status: 'Cumplido', credits: 4},
      ]
    },
    {
      title: 'Ciclo III',
      course: [
        { name: 'CÁLCULO MULTIVARIABLE', status: 'Cumplido', credits: 5},
        { name: 'FÍSICA GENERAL', status: 'Cumplido', credits: 4},
        { name: 'COSTOS Y PRESUPUESTOS', status: 'Cumplido', credits: 3},
        { name: 'ALGORITMOS Y ESTRUCTURAS DE DATOS I', status: 'Cumplido', credits: 4},
        { name: 'ESTADÍSTICA Y PROBABILIDADES', status: 'Cumplido', credits: 4},
        { name: 'TEORIA GENERAL DE SISTEMAS', status: 'Cumplido', credits: 3},
      ]
    },
    {
      title: 'Ciclo IV',
      course: [
        { name: 'ECUACIONES DIFERENCIALES', status: 'Cumplido', credits: 3},
        { name: 'SISTEMAS ELÉCTRICOS Y ELECTRÓNICOS', status: 'Cumplido', credits: 4},
        { name: 'ESTADÍSTICA INFERENCIAL', status: 'Cumplido', credits: 4},
        { name: 'SISTEMAS OPERATIVOS', status: 'Cumplido', credits: 4},
        { name: 'ALGORITMOS Y ESTRUCTURAS DE DATOS II', status: 'Cumplido', credits: 4},
        { name: 'BASE DE DATOS I', status: 'Cumplido', credits: 3},
      ]
    },
    {
      title: 'Ciclo V',
      course: [
        { name: 'DESARROLLO E INNOVACIÓN TECNOLÓGICA', status: 'Cursando', credits: 3},
        { name: 'SISTEMAS DE INFORMACIÓN', status: 'Cursando', credits: 4},
        { name: 'PROGRAMACIÓN WEB', status: 'Cursando', credits: 4},
        { name: 'SISTEMAS DIGITALES', status: 'Cursando', credits: 3},
        { name: 'REDES DE COMPUTADORAS I', status: 'Cursando', credits: 4},
        { name: 'BASE DE DATOS II', status: 'Cursando', credits: 3},
      ]
    },
  ];

  constructor() {}

  getAcademicRegistry() : Cycle[] {
    return this.academicRegistry;
  }
}
