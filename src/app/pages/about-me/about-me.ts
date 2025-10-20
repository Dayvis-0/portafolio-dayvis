import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutHighlightsService } from '../../services/about.highlights.service';
import { AboutHighlight } from '../../models/about-highlight';
import { AboutDescription } from '../../models/about-description';
import { AboutDescriptionService } from '../../services/about.description.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export class AboutMe {
  aboutHighlights: AboutHighlight[] = [];
  aboutDescriptions: AboutDescription[] = [];
  
  constructor(
    private aboutHighlightsService: AboutHighlightsService,
    private aboutDescriptionsService: AboutDescriptionService, 
  ) {}

  ngOnInit() {
    this.aboutHighlights = this.aboutHighlightsService.getAboutHighlights();
    this.aboutDescriptions = this.aboutDescriptionsService.getAboutDescription();
  }
}
