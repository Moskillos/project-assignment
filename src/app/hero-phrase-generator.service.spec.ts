import { TestBed } from '@angular/core/testing';

import { HeroPhraseGeneratorService } from './hero-phrase-generator.service';

describe('HeroPhraseGeneratorService', () => {
  let service: HeroPhraseGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroPhraseGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
