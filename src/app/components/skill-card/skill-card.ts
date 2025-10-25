import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css'
})
export class SkillCard {
  // @input: Recibe datos del componente padre
  @Input() skill! : Skill;
  @Input() isFlipped: boolean = false;

  // @Output: Envia eventos al componente padre
  @Output() cardClicked = new EventEmitter<Skill>();

  onCardClick() {
    this.cardClicked.emit(this.skill);
  }
}
