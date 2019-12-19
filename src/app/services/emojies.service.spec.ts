import { TestBed } from '@angular/core/testing';

import { EmojiesService } from './emojies.service';

describe('EmojiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmojiesService = TestBed.get(EmojiesService);
    expect(service).toBeTruthy();
  });
});
