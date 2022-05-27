import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../model';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() hero:Hero[] = []

  constructor() { }

  ngOnInit(): void {
  }

}