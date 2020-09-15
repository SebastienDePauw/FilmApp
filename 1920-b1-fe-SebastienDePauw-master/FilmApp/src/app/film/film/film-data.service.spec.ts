/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FilmDataService } from './film-data.service';

describe('Service: FilmData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmDataService]
    });
  });

  it('should ...', inject([FilmDataService], (service: FilmDataService) => {
    expect(service).toBeTruthy();
  }));
});
