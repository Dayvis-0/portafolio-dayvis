import { Injectable } from '@angular/core';
import { SkillProgress } from '../models/skill-progress';

@Injectable({
  providedIn: 'root'
})
export class SkillProgressService {
  skillsProgress: SkillProgress[] = [
    {
      name: 'Python',
      porcentage: 10,
    },
    {
      name: 'HTML/CSS', 
      porcentage: 20,
    },
    {
      name: 'JavaScript'
      , porcentage: 20,
    },
    {
      name: 'Linux'
      , porcentage: 10,
    },
    {
      name: 'Pentesting'
      , porcentage: 5,
    },
    {
      name: 'Databases'
      , porcentage: 25,
    },
  ];

  constructor() {}

  getSkillsProgress() : SkillProgress[] {
    return this.skillsProgress;
  }
}
