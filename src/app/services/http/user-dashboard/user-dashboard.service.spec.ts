import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '../master/http.service';

import { UserDashboardService } from './user-dashboard.service';

describe('UserDashboardService', () => {
  let service: UserDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpService]
    });
    service = TestBed.inject(UserDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
