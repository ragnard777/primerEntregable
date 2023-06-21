import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first',
  template: `
  <p style="font-weight: 200; text-decoration: underline; font-family: Arial">
    <ng-content></ng-content>
  </p>
`,
  styleUrls: []
})
export class MyFirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
