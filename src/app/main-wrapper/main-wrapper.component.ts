import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  template: `
  <main>
  <ng-content></ng-content>
 </main>
`,
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
