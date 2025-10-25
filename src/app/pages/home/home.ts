import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, Skills],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

}
