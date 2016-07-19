import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public foo: string = 'bar';

  constructor() {
    // Do stuff
  }

  updateValue(target: string): void {
    this.foo = target;
  }

  ngOnInit() {
    console.log('Hello About');
  }

}
