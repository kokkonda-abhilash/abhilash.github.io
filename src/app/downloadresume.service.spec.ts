import { TestBed } from '@angular/core/testing';

import { DownloadresumeService } from './downloadresume.service';

describe('DownloadresumeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownloadresumeService = TestBed.get(DownloadresumeService);
    expect(service).toBeTruthy();
  });
});
