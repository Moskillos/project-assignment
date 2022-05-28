import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroPhraseGeneratorService {
  phrases: string[] = [
    'Io sono vendetta',
    'Andiamo a prenderli',
    'Salverò Gotham',
    'Ho imparato che non importa quale sia la storia, alcune cose non cambiano mai.',
    'Dopo tutto, la fama è la nuova valuta internazionale.'
  ]

  constructor() { }
}
