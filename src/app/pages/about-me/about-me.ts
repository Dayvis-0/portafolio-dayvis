import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutHighlightsService } from '../services/about.highlights.service';
import { AboutHighlight } from '../models/about-highlight';
import { SkillCategory } from '../models/skill-category';
import { SkillsCategoriesService } from '../services/skills.categories.service';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule, FormsModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export class AboutMe {
  aboutHighlights: AboutHighlight[] = [];
  skillsCategorys: SkillCategory[] = [];
  
  constructor(
    private aboutHighlightsService: AboutHighlightsService,
    private skillsCategorysService: SkillsCategoriesService,
  ) {}
  

  ngOnInit() {
    this.aboutHighlights = this.aboutHighlightsService.getAboutHighlights();
    this.skillsCategorys = this.skillsCategorysService.getSkillCategory();
  }
}
