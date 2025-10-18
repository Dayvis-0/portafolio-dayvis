import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SkillsService } from '../services/skills.service';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  skills: Skill[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.skills = this.skillsService.getSkills();
  }
}