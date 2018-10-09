import { Component } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent {
  ismeridian = true;
  mytime: Date = new Date();
  meridians = ['12H', '24H'];
  minTime: Date = new Date();
  maxTime: Date = new Date();
  showSec = true;
  isDisabled = true;
  readonly = true;
  isValid: boolean;
  showSpinners = true;

usage =
`import { TimepickerModule } from 'ngx-foundation';

@NgModule({
  imports: [TimepickerModule.forRoot(),...]
})
export class AppModule(){}`;

basicTemplate =
`<timepicker [(ngModel)]="mytime"></timepicker>
<div class="callout primary">The time is: {{mytime}}</div>`;

basicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-timepicker-basic',
  templateUrl: './basic.html'
})
export class DemoTimepickerBasicComponent {
  mytime: Date = new Date();
}`;

meridianTemplate =
`<timepicker [(ngModel)]="mytime" [showMeridian]="ismeridian"></timepicker>
<div class="callout success">The time is: {{mytime}}</div>
<br>
<button type="button" class="button secondary" (click)="toggleMode()">
  Change to {{ismeridian ? '24H' : '12H'}}
</button>`;

meridianComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-timepicker-meridian',
  templateUrl: './meridian.html'
})
export class DemoTimepickerMeridianComponent {
  ismeridian: boolean = true;

  mytime: Date = new Date();

  toggleMode(): void {
    this.ismeridian = !this.ismeridian;
  }
}`;

customMeridTemplate =
`<timepicker [(ngModel)]="mytime" [meridians]="meridians"></timepicker>
<div class="callout success"><pre>The time is: {{mytime}}</pre></div>`;

customMeridComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-timepicker-custom-meridian',
  templateUrl: './custom-meridian.html'
})
export class DemoTimepickerCustomMeridianComponent {
  mytime: Date = new Date();
  meridians = ['12H', '24H'];
}`;

minMaxTemplate =
`<timepicker [(ngModel)]="mytime" [min]="minTime" [max]="maxTime"></timepicker>
<div class="callout success"><pre>The time is: {{mytime}}</pre></div>`;

minMaxComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-timepicker-min-max',
  templateUrl: './min-max.html'
})
export class DemoTimepickerMinMaxComponent {
  myTime: Date = new Date();
  minTime: Date = new Date();
  maxTime: Date = new Date();

  constructor() {
    this.minTime.setHours(8);
    this.minTime.setMinutes(0);
    this.maxTime.setHours(17);
    this.maxTime.setMinutes(0);
  }
}`;

hideSecTemplate =
`<timepicker [(ngModel)]="mytime" [showSeconds]="showSec"></timepicker>
<button class="button small primary" (click)="toggleSeconds()">
  {{showSec? 'Hide seconds' : 'Show seconds'}}
</button>
<div class="callout success"><pre>The time is: {{mytime}} <br>showSeconds: {{showSec}}</pre></div>`;

hideSecComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-timepicker-seconds',
  templateUrl: './toggle-minutes-seconds.html'
})
export class DemoTimepickerToggleMinutesSecondsComponent {
  myTime: Date = new Date();
  showSec = true;

  toggleSeconds(): void {
    this.showSec = !this.showSec;
  }
}`;

disabledTemplate =
`<timepicker [(ngModel)]="myTime" [showMeridian]="isMeridian" [disabled]="!isDisabled"></timepicker>
<button type="button"
  class="button primary" 
  (click)="isDisabled=!isDisabled">
  {{isDisabled ? 'Disable' : 'Enable'}} Inputs
</button>`;

disabledComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-timepicker-disabled',
  templateUrl: './disabled.html'
})
export class DemoTimepickerDisabledComponent {
  isMeridian = true;
  isDisabled = true;
  myTime = new Date();
}`;

readonlyTemplate =
`<timepicker [(ngModel)]="myTime" [showMeridian]="isMeridian" [readonlyInput]="!readonly"></timepicker>
<button type="button"
  class="button primary"
  (click)="readonly=!readonly">
  {{readonly ? 'Readonly' : 'Editable'}}
  Inputs
</button>`;

readonlyComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-timepicker-readonly',
  templateUrl: './readonly.html'
})
export class DemoTimepickerReadonlyComponent {
  isMeridian = false;
  readonly = true;
  myTime = new Date();
}`;

dynamicTemplate =
`<timepicker [(ngModel)]="mytime" (ngModelChange)="changed()" (isValid)="isValid = $event"></timepicker>
<div class="callout success"><pre>Time is: {{mytime}}</pre></div>
<div *ngIf="!isValid" class="callout alert"><pre>Invalid time format</pre></div>
<div class="button-group">
  <button type="button" class="button primary" (click)="update()">Set to 14:00</button>
  <button type="button" class="button alert" (click)="clear()">Clear</button>
</div>`;

dynamicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-timepicker-dynamic',
  templateUrl: './dynamic.html'
})
export class DemoTimepickerDynamicComponent {
  mytime: Date = new Date();
  isValid: boolean;

  update(): void {
    let d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    this.mytime = d;
  }

  changed(): void {
    console.log('Time changed to: ' + this.mytime);
  }

  clear(): void {
    this.mytime = void 0;
  }
}`;

spinnersTemplate =
`<timepicker [(ngModel)]="myTime"
  [showMeridian]="isMeridian"
  [showSpinners]="showSpinners">
</timepicker>
<button type="button"
  class="button primary" 
  (click)="showSpinners = !showSpinners">
  Show / Hide Spinners
</button>`;

spinnersComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-timepicker-spinners',
  templateUrl: './spinners.html'
})
export class DemoTimepickerSpinnersComponent {
  isMeridian = false;
  showSpinners = true;
  myTime: Date = new Date();
}`;

defaultsTemplate =
`<timepicker [(ngModel)]="mytime"></timepicker>
<div class="callout secondary">The time is: {{mytime}}</div>`;

defaultsComponent =
`import { Component } from '@angular/core';
import { TimepickerConfig } from 'ngx-foundation/timepicker';

// such override allows to keep some initial values

export function getTimepickerConfig(): TimepickerConfig {
  return Object.assign(new TimepickerConfig(), {
    hourStep: 1,
    minuteStep: 5,
    showMeridian: true,
    readonlyInput: false,
    mousewheel: true,
    showMinutes: true,
    showSeconds: false
  });
}

@Component({
  selector: 'demo-timepicker-config',
  templateUrl: './config.html',
  providers: [{ provide: TimepickerConfig, useFactory: getTimepickerConfig }]
})
export class DemoTimepickerConfigComponent {
  mytime: string;
}`;

  constructor() {
    this.minTime.setHours(8);
    this.minTime.setMinutes(0);
    this.maxTime.setHours(17);
    this.maxTime.setMinutes(0);
  }

  toggleMode(): void {
    this.ismeridian = !this.ismeridian;
  }

  toggleSeconds(): void {
    this.showSec = !this.showSec;
  }

  update(): void {
    const d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    this.mytime = d;
  }

  changed(): void {
    console.log('Time changed to: ' + this.mytime);
  }

  clear(): void {
    this.mytime = void 0;
  }
}
