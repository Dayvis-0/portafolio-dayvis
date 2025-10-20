import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkillsService } from '../../services/skills.service';
import { Skill } from '../../models/skill';
import { AboutMe } from '../about-me/about-me';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, AboutMe],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  skills: Skill[] = [];
  selectedSkill: Skill | null = null;

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.skills = this.skillsService.getSkills();
  }

  selectSkill(skill: Skill) {
    this.selectedSkill = this.selectedSkill === skill ? null : skill;
  }
}
