import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Skills } from '../skills/skills';
import { UppercaseCustomPipe } from '../../pipes/uppercase-custom-pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, Skills, UppercaseCustomPipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

}
