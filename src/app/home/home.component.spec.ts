import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { HomeService } from './index';

import { HTTP_PROVIDERS } from '@angular/http';

describe('HomeService', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([HTTP_PROVIDERS, HomeService]);
  });

  it('getHomeData() should return data object', inject([HomeService], s => {
    s.getHomeData().then(x => {
      expect(x).not.toBeUndefined();
      expect(x).not.toBeNull();
    });
  }));

});
