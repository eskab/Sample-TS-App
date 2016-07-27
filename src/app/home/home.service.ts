import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class HomeService {

    private homeDataUrl: string = 'http://localhost:3000/homedata';

    constructor(private http: Http) {}

    getHomeData(): Promise<any[]> {
        return this.http.get(this.homeDataUrl)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
    }

    extractData(res: Response) {
        const body = res.json();
        console.log(body);
        return body || {};
    }

    handleError(error: any) {
        const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg);
        return Promise.reject(errMsg);
    }

}
