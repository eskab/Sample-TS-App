import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { HomeService } from './home.service';

@Injectable()
export class HomeResolver implements Resolve<any> {

    constructor(private homeService: HomeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return Observable.fromPromise(this.homeService.getHomeData());
    }

}
