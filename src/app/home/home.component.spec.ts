import {
  inject,
  async,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { HomeService, HomeResolver } from './index';

import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

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

  it('handleError() should log error.message to console', inject([HomeService], s => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    const error = {
      message: 'Strange error occures'
    };

    s.handleError(error).then(function() {}, function(reason) {
      expect(reason).toBe(error.message);
    });
    expect(console.log).toHaveBeenCalledWith(error.message);
  }));

  it('handleError() should log error.status and error.statusText to console', inject([HomeService], s => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    const error = {
      status: 404,
      statusText: 'Not found'
    };

    s.handleError(error).then(function() {}, function(reason) {
      expect(reason).toBe(error.status + ' - ' + error.statusText);
    });
    expect(console.log).toHaveBeenCalledWith(error.status + ' - ' + error.statusText);
  }));

  it('handleError() should log "Server error"', inject([HomeService], s => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    s.handleError({}).then(function() {}, function(reason) {
      expect(reason).toBe('Server error');
    });
    expect(console.log).toHaveBeenCalledWith('Server error');
  }));

});

describe('HomeResolver', () => {

  beforeEach(() => {
    addProviders([HTTP_PROVIDERS, ROUTER_DIRECTIVES, HomeService, HomeResolver]);
  });

  it('Should return observable', inject([HomeService, HomeResolver], (service, resolver) => {
    expect(resolver.resolve().toPromise).toBeDefined();
  }));

});
