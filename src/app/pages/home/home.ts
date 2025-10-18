import { Component } from '@angular/core';
import { Skill } from '../models/skill';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Skills } from '../services/skills-services';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private skillsService: Skills) {
    this.skills = this.skillsService.skills;
  }

  skills: Skill[] = [];
}