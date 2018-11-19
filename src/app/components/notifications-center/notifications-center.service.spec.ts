import { TestBed } from '@angular/core/testing';

import { NotificationsCenterService } from './notifications-center.service';

describe('NotificationsCenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationsCenterService = TestBed.get(NotificationsCenterService);
    expect(service).toBeTruthy();
  });
});
