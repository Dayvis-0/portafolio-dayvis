import { Injectable } from '@angular/core';
import { SkillCategory } from '../models/skill-category';

@Injectable({
  providedIn: 'root'
})
export class SkillsCategoriesService {
  skillsCategorys: SkillCategory[] = [
    {
      title: 'Lenguajes de Programación',
      skills: ['Python', 'JavasCript', 'HTML/CSS', 'Bash', 'Java']
    },
    {
      title: 'Seguridad Informática',
      skills: ['Pentration Testing', 'Kali Linux']
    },
    {
      title: 'Herramientas y Tecnologías',
      skills: ['Linux', 'Git', 'Databases', 'Web Development']
    },
  ];

  constructor() {}

  getSkillCategory() { return this.skillsCategorys; }
}
