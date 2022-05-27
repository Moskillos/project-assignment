import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../model';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() hero:Hero[] = [];
  @Output() heroPhrases= new EventEmitter<string>();
  phrases: string[] = [
    'Io sono vendetta',
    'Andiamo a prenderli',
    'Salverò Gotham',
    'Ho imparato che non importa quale sia la storia, alcune cose non cambiano mai.',
    'Dopo tutto, la fama è la nuova valuta internazionale.'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){    
    const phrase = Math.floor(Math.random()* this.phrases.length);
    const emit = this.phrases[phrase]
    this.heroPhrases.emit(emit)
  }

}
