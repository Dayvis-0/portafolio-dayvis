import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkillsService } from '../../services/skills.service';
import { Skill } from '../../models/skill';
import { SkillCard } from '../../components/skill-card/skill-card';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, FormsModule, SkillCard], // 👈 Importa el hijo
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skills: Skill[] = [];
  selectedSkill: Skill | null = null;
  greetingMessage: string = '';

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.skills = this.skillsService.getSkills();
  }

  // 📥 Método que recibe el evento del componente hijo
  onSkillSelected(skill: Skill) {
    this.selectedSkill = this.selectedSkill === skill ? null : skill;
    console.log('Habilidad seleccionada:', skill.name);
  }

  sendGreeting(message: string) {
    this.greetingMessage = message;
  }
}