import { TestBed, inject } from '@angular/core/testing';

import { ProfListDataService } from './prof-list-data.service';

describe('ProfListDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfListDataService]
    });
  });

  it('should be created', inject([ProfListDataService], (service: ProfListDataService) => {
    expect(service).toBeTruthy();
  }));
});
