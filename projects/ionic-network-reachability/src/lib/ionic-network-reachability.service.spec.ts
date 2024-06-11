import { TestBed } from '@angular/core/testing';

import { IonicNetworkReachabilityService } from './ionic-network-reachability.service';

describe('IonicNetworkReachabilityService', () => {
  let service: IonicNetworkReachabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicNetworkReachabilityService);
  });

  it('should be created', () => {
    expect(service.isReachable()).toBeTruthy();
  });
});
