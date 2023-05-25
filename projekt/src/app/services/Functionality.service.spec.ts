/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FunctionalityService } from './Functionality.service';

describe('Service: Functionality', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FunctionalityService]
    });
  });

  it('should ...', inject([FunctionalityService], (service: FunctionalityService) => {
    expect(service).toBeTruthy();
  }));
});
