import { Injectable } from '@angular/core';
import { AboutHighlight } from '../models/about-highlight';

@Injectable({
  providedIn: 'root'
})

export class AboutHighlights {
  aboutHighlights: AboutHighlight[] = [
    {
      amount: 3,
      text: 'Certificaciones'
    },
    {
      amount: 1,
      text: 'Proyecto'
    },
    {
      amount: 2,
      text: 'Años estudiando'
    },
  ]

  constructor() {}

  getAboutHighlights() : AboutHighlight[] {
    return this.aboutHighlights;
  }
}
