import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})

export class SkillsService {
  skills: Skill[] = [
    {
      icon: '💻',
      name: 'Desarrollo Web',
      description: 'HTML, CSS, JavaScript'
    },
    {
      icon: '🐍',
      name: 'Python',
      description: 'Algoritmos y estructuras de datos'
    },
    {
      icon: '☕',
      name: 'Java',
      description: 'Algoritmos y estructuras de datos'
    },
    {
      icon: '🛡️',
      name: 'Seguridad',
      description: 'Pentesting y análisis'
    },
    {
      icon: '🐧',
      name: 'Linux',
      description: 'Comandos y personalización'
    },
  ]

  constructor() {}

  getSkills() : Skill[] {
    return this.skills;
  }
}
