import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

@Component({
  selector: 'my-home',
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private errorMsg: string;
  private homeData: Object;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    console.log('Hello Home');
    this.getHomeData();
  }

  getHomeData() {
    this.homeService.getHomeData()
                      .subscribe(
                        homeData => this.homeData = homeData,
                        error => this.errorMsg = <any>error);
  }

}
