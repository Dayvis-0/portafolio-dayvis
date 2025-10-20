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
      description: 'Estructurar el contenido de páginas web.'
    },
    {
      icon: '/img/css3.png',
      name: 'CSS',
      description: 'Diseñar y estilo a las interfaces web.'
    },
    {
      icon: '/img/js.png',
      name: 'JavaScript',
      description: 'Agregar interactividad y dinamismo a las páginas web'
    },
    {
      icon: '/img/python.png',
      name: 'Python',
      description: 'Algoritmos y estructuras de datos.'
    },
    {
      icon: '/img/java.png',
      name: 'Java',
      description: 'Algoritmos y estructuras de datos.'
    },
    {
      icon: '/img/kali.png',
      name: 'Kali',
      description: 'Pentesting y análisis.'
    },
    {
      icon: '/img/debian.png',
      name: 'Debian',
      description: 'Comandos y personalización.'
    },
    {
      icon: '/img/vscode.png',
      name: 'Visual Studio Code',
      description: 'Editor principal para desarrollo web y scripting.'
    },
    {
      icon: '/img/git.png',
      name: 'Git',
      description: 'Control de versiones para todos mis proyectos.'
    },
    {
      icon: '/img/github1.png',
      name: 'GitHub',
      description: 'Plataforma en la nube para alojar y gestionar mis repositorios Git.'
    },
    {
      icon: '/img/dbeaver.png',
      name: 'Dbeaver',
      description: 'Administración y gestión de bases de datos.'
    },
    {
      icon: '/img/sqlserver.png',
      name: 'SqlServer',
      description: 'Motor de base de datos para mis proyectos.'
    },
    {
      icon: '/img/apache.png',
      name: 'Apache NetBeans',
      description: 'Entorno de desarrollo para crear aplicaciones en Java.'
    },
  ]

  constructor() {}

  getSkills() : Skill[] {
    return this.skills;
  }
}
