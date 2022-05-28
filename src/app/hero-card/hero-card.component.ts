import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroPhraseGeneratorService } from '../hero-phrase-generator.service';
import { Hero } from '../model';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() hero:Hero[] = [];
  @Output() heroPhrases= new EventEmitter<string>();
  

  constructor(private heroPhrasesGenerator: HeroPhraseGeneratorService) { }

  ngOnInit(): void {
  }

  onClick(){    
    const phrase = Math.round(Math.random()* this.heroPhrasesGenerator.phrases.length);
    const emit = this.heroPhrasesGenerator.phrases[phrase]
    this.heroPhrases.emit(emit)
  }

}
