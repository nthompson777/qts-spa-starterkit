import { Component } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent {

  dynamic: number;
  type: string;
  /* stacked: any[] = []; */

usage =
`import { ProgressbarModule } from 'ngx-foundation';

@NgModule({
  imports: [ProgressbarModule.forRoot(),...]
})
export class AppModule(){}`;

staticTemplate =
`<div class="grid-x grid-margin-x">
  <div class="medium-8 large-5 cell">
    <section>
      <progressbar [value]="85" type="default"></progressbar>
      <progressbar [value]="75" type="success" class="success">75%</progressbar>
      <progressbar [value]="50" type="warning" class="warning">50%</progressbar>
      <progressbar [value]="25" type="alert" class="alert">25%</progressbar>
      <progressbar [value]="0" type="alert" class="alert">0%</progressbar>
    </section>
  </div><!-- /cell -->
</div><!-- /grid -->`;

staticComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-progressbar-static',
  templateUrl: './static.html'
})
export class DemoProgressbarStaticComponent {}`;

dynamicTemplate =
`<div class="grid-x grid-margin-x">
  <div class="medium-8 large-5 cell">
    <progressbar [ngClass]="type" [value]="dynamic" [type]="type">{{dynamic}}%</progressbar>
    <p>Level: {{type | capitalize}} <span class="info-tooltip"
      tooltip="Displaying a progress bar level of {{type}}."
      placement="auto"></span>
    </p>
    <button type="button" class="button small primary" (click)="random()">Randomize Above Progress Bar</button>
  </div>
</div>`;

dynamicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-progressbar-dynamic',
  templateUrl: './dynamic.html'
})
export class DemoProgressbarDynamicComponent {
  dynamic: number;
  type: string;

  constructor() {
    this.random();
  }

  random(): void {
    let value = Math.floor(Math.random() * 100 + 1);
    let type: string;

    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }

    this.dynamic = value;
    this.type = type;
  }
}`;

random(): void {
  const value = Math.floor(Math.random() * 100 + 1);
  let type: string;

  if (value < 50) {
    type = 'alert';
  } else if (value < 70) {
    type = 'warning';
  } else {
    type = 'success';
  }

  this.dynamic = value;
  this.type = type;
}

  constructor() {
    this.random();
    /* this.randomStacked(); */
  }

  /* randomStacked(): void {
    const types = ['success', 'warning', 'danger'];

    this.stacked = [];
    const n = Math.floor(Math.random() * 3 + 1);
    for (let i = 0; i < n; i++) {
      const index = Math.floor(Math.random() * 3);
      const value = Math.floor(Math.random() * 27 + 3);
      this.stacked.push({
        value,
        type: types[index],
        label: value + ' %'
      });
    }
  } */
}
