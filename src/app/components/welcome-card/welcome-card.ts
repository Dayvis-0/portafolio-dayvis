import { CommonModule} from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './welcome-card.html',
  styleUrl: './welcome-card.css'
})
export class WelcomeCard {
  @Input() userName: string = '';
  @Output() greet = new EventEmitter<string>();

  sendGreeting() {
    this.greet.emit(`!Hola ${this.userName}! Bienvenido a mi portafolio`);
  }
}
