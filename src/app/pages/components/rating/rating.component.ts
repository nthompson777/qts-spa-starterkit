import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  max = 10;
  basicRate = 5;
  rate = 7;
  onEnterRate = 4;
  isReadonly = false;
  isReadonlyEnter = false;

  overStar: number;
  percent: number;

usage =
`import { RatingModule } from 'ngx-foundation';

@NgModule({
  imports: [RatingModule.forRoot(),...]
})
export class AppModule(){}`;

basicTemplate =
`<rating [(ngModel)]="basicRate" [max]="max" [readonly]="isReadonly"></rating>
<div class="callout">
  <pre>Rate: <strong>{{basicRate}}</strong> </pre>
</div>`;

basicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-rating-basic',
  templateUrl: './basic.html'
})
export class DemoRatingBasicComponent {
  max: number = 10;
  rate: number = 7;
  isReadonly: boolean = true;
}`;

dynamicTemplate =
`<rating [(ngModel)]="rate"
  [max]="max"
  [readonly]="isReadonly"
  (keyup)="confirmSelection($event)"
  (onHover)="hoveringOver($event)"
  (onLeave)="resetStar()"
  [titles]="['one','two','three']">
</rating>
<span
[ngClass]="{'alert-color': percent<60, 'success-color': percent>=60}"
[ngStyle]="{display: (overStar && !isReadonly) ? 'inline' : 'none'}"> {{percent}}%</span>
<div class="callout">
  <pre>Rate: <strong>{{rate}}</strong>;  Readonly is: <em>{{isReadonly}}</em>;  Hovering over: <strong>{{overStar || "none"}}</strong></pre>
</div>
<button class="button small primary" (click)="resetStarsCTA()">Reset rating and status</button>`;

dynamicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-rating-dynamic',
  templateUrl: './dynamic.html'
})
export class DemoRatingDynamicComponent {
  max = 10;
  rate = 7;
  isReadonly = false;

  overStar: number;
  percent: number;

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  resetStar(): void {
    this.overStar = void 0;
  }

  resetStarsCTA() {
    this.rate = 0;
    this.isReadonly = false;
  }
}`;

onEnterTemplate =
`<rating [(ngModel)]="rate" 
  [max]="max" 
  [readonly]="isReadonly"
  (keyup)="confirmSelection($event)">
</rating>
<div class="callout">
  <pre>Rating: <b>{{rate}}</b>;  Readonly is: <i>{{isReadonly}}</i>;</pre>
</div>`;

onEnterComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-select-on-enter',
  templateUrl: './select-on-enter.html'
})
export class DemoRatingSelectOnEnterComponent {
  max = 10;
  rate = 7;
  isReadonly = false;

  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.isReadonly = true;
    }
  }

  resetStars() {
    this.rate = 0;
    this.isReadonly = false;
  }
}`;

  constructor() { }

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  resetStar(): void {
    this.overStar = void 0;
  }

  resetStarsCTA() {
    this.rate = 0;
    this.isReadonly = false;
  }

  onEnterResetStarsCTA() {
    this.onEnterRate = 0;
    this.isReadonlyEnter = false;
  }

  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.isReadonlyEnter = true;
    }
  }

  resetStars() {
    this.rate = 0;
    this.isReadonly = false;
  }
}
