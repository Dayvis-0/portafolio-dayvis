import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})

export class SkillsService {
  skills: Skill[] = [
    {
      icon: '/img/html5.png',
      name: 'HTML',
      description: 'Desarrollo Web'
    },
    {
      icon: '/img/css3.png',
      name: 'CSS',
      description: 'Desarrollo Web'
    },
    {
      icon: '/img/js.png',
      name: 'JavaScript',
      description: 'Desarrollo Web'
    },
    {
      icon: '/img/python.png',
      name: 'Python',
      description: 'Algoritmos y estructuras de datos'
    },
    {
      icon: '/img/java.png',
      name: 'Java',
      description: 'Algoritmos y estructuras de datos'
    },
    {
      icon: '/img/kali.png',
      name: 'Seguridad',
      description: 'Pentesting y análisis'
    },
    {
      icon: '/img/linux.png',
      name: 'GNU/Linux',
      description: 'Comandos y personalización'
    },
  ]

  constructor() {}

  getSkills() : Skill[] {
    return this.skills;
  }
}
