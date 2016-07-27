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
  private homeDesc: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const data = this.route.snapshot.data['homeData'];

    this.homeTitle = data.title;
    this.homeDesc = data.desc;
  }

}
