import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkillsService } from '../../services/skills.service';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, FormsModule],
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

  selectSkill(skill: Skill) {
    this.selectedSkill = this.selectedSkill === skill ? null : skill;
  }

  sendGreeting(message: string) {
    this.greetingMessage = message;
  }
}
