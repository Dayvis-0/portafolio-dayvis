import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutService } from '../../services/about.service';
import { AboutHighlight } from '../../models/about';
import { UppercaseCustomPipe } from '../../pipes/uppercase-custom-pipe';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, FormsModule, UppercaseCustomPipe],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export class AboutMe {
  isLoading: boolean = true;
  aboutDescriptions: string[] = [];
  aboutHighlights: AboutHighlight[] = [];

  constructor(private aboutService: AboutService) {}

  async ngOnInit() {
    this.aboutDescriptions = await this.aboutService.getDescriptions();
    this.aboutHighlights = await this.aboutService.getHighlights();
    this.isLoading = false;
  }
}
