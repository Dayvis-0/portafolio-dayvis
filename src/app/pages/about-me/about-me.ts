import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutHighlights } from '../services/about-highlights';
import { AboutHighlight } from '../models/about-highlight';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule, FormsModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export class AboutMe {
  aboutHighlights: AboutHighlight[] = [];

  constructor(private aboutHighlightsService: AboutHighlights) {}

  ngOnInit() {
    this.aboutHighlights = this.aboutHighlightsService.getAboutHighlights();
  }
}
