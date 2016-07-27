import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HomeService } from './home.service';

@Component({
  selector: 'my-home',
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private homeTitle: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('Hello Home');
    this.homeTitle = this.route.snapshot.data['homeData'].title;
  }

}
