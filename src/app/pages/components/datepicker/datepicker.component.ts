import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-foundation/datepicker';
import { defineLocale } from 'ngx-foundation/chronos';
import { esLocale } from 'ngx-foundation/locale';
import { listLocales } from 'ngx-foundation/chronos';

import { faCalendarAlt } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  colorTheme = 'null';
  bsConfig: Partial<BsDatepickerConfig>;
  faCalendarAlt = faCalendarAlt;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  customMinDate = new Date(2017, 5, 10);
  customMaxDate = new Date(2018, 9, 15);
  locale = 'en';
  locales = listLocales();
  dateMinDate: Date;
  dateMaxDate: Date;

  usage =
`import { BsDatepickerModule } from 'ngx-foundation';

@NgModule({
  imports: [BsDatepickerModule.forRoot(),...]
})
export class AppModule(){}`;

  cssLoad =
`Add to your angular.json file:
"styles": [
  "...",
  "./node_modules/ngx-foundation/datepicker/bs-datepicker.css"
],...`;

  scssLoad =
`Add to your /style.scss file:
// Import Angular ngx-foundation Framework Added Styles
@import "~ngx-foundation/assets/scss/main";`;

  basicTemplate =
`<div class="grid-x grid-margin-x">
  <div class="small-6 medium-4 large-3 cell">
    <input type="text"
            placeholder="Datepicker"
            placement="top"
            bsDatepicker>
  </div>
  <div class="small-6 medium-4 large-3 cell">
    <input type="text"
            placeholder="Date Range Picker"
            placement="top"
            bsDaterangepicker>
  </div>
</div>`;

  basicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-datepicker-basic',
  templateUrl: './basic.html'
})
export class DemoDatepickerBasicComponent {}`;

  initialTemplate =
`<div class="grid-x grid-margin-x">
  <div class="medium-4 large-3 cell">
    <input type="text"
      #dp="bsDatepicker"
      bsDatepicker
      [bsValue]="bsValue">
  </div>
  <div class="medium-4 large-3 cell">
    <button class="button small success" (click)="dp.toggle()" [attr.aria-expanded]="dp.isOpen">Date Picker</button>
  </div>
</div>

<div class="grid-x grid-margin-x">
  <div class="medium-4 cell">
    <input type="text"
      #drp="bsDaterangepicker"
      bsDaterangepicker
      [(ngModel)]="bsRangeValue">
  </div>
  <div class="medium-4 cell">
    <button class="button small success" (click)="drp.toggle()" [attr.aria-expanded]="drp.isOpen">Date Range Picker</button>
  </div>
</div>`;

  initialComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-datepicker-date-initial-state',
  templateUrl: './date-initial-state.html'
})
export class DemoDatepickerDateInitialStateComponent {
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
}`;

  customDateTemplate =
`<form [formGroup]="myForm">
  <div class="grid-x grid-margin-x">
    <div class="medium-5 large-4 cell">
      <input type="text"
        [minDate]="customMinDate"
        [maxDate]="customMaxDate"
        #dpYMD="bsDatepicker"
        placement="top"
        bsDatepicker
        formControlName="myDateYMD"
        [bsConfig]="{ dateInputFormat: 'YYYY-MM-DD' }">
    </div>
    <div class="medium-5 cell">
      <button class="button small success"
        (click)="dpYMD.toggle()"
        [attr.aria-expanded]="dpYMD.isOpen">
        Date Picker
      </button>
    </div>
  </div>

  <div class="grid-x grid-margin-x">
    <div class="medium-5 large-4 cell">
      <input type="text"
        [minDate]="customMinDate"
        [maxDate]="customMaxDate"
        placement="top"
        #dpMDY="bsDatepicker"
        bsDatepicker
        formControlName="myDateMDY"
        [bsConfig]="{ dateInputFormat: 'MM/DD/YYYY' }">
    </div>
    <div class="medium-5 cell">
      <button class="button small success"
        (click)="dpMDY.toggle()"
        [attr.aria-expanded]="dpMDY.isOpen">
        Date Picker
      </button>
    </div>
  </div>

  <div class="grid-x grid-margin-x">
    <div class="medium-5 large-4 cell">
      <input type="text"
        [minDate]="customMinDate"
        [maxDate]="customMaxDate"
        placement="top"
        #dpFull="bsDatepicker"
        bsDatepicker
        formControlName="myDateFull"
        [bsConfig]="{ dateInputFormat: 'MMMM Do YYYY, h:mm:ss a' }">
    </div>
    <div class="medium-5 cell">
      <button class="button small success" (click)="dpFull.toggle()" [attr.aria-expanded]="dpFull.isOpen">Date Picker</button>
    </div>
  </div>
</form>`;

  customDateComponent =
`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'demo-date-picker-custom-format',
  templateUrl: './custom-format.html'
})
export class DemoDatePickerCustomFormatComponent {
  customMinDate = new Date(2017, 5, 10);
  customMaxDate = new Date(2018, 9, 15);

  myForm = new FormGroup({
    myDateYMD: new FormControl(new Date()),
    myDateFull: new FormControl(new Date()),
    myDateMDY: new FormControl(new Date())
  });
}`;

themesTemplate =
`<div class="grid-x grid-margin-x">
  <div class="medium-4 large-3 cell">
    <select
      [(ngModel)]="colorTheme" (ngModelChange)="applyTheme(dp);">
      <option disabled="true" [selected]="true" value="null">Choose Your Theme</option>
      <option value="theme-primary">theme-primary</option>
      <option value="theme-secondary">theme-secondary</option>
    </select>
  </div><!-- /cell -->
  <div class="medium-4 large-3 cell">
    <div class="input-group">
      <input type="text" class="input-group-field" bsDatepicker #dp="bsDatepicker" [bsConfig]="bsConfig">
      <div class="input-group-button">
        <button class="button success small" (click)="dp.show()" [attr.aria-expanded]="dp.isOpen">Open</button>
      </div>
    </div>
  </div><!-- /cell -->
</div><!-- /grid -->`;

themesComponent =
`import { Component } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-foundation/datepicker';

@Component({
  selector: 'demo-datepicker-color-theming',
  templateUrl: './color-theming.html'
})
export class DemoDatepickerColorThemingComponent {
  colorTheme = 'null';

  bsConfig: Partial<BsDatepickerConfig>;

  applyTheme(pop: any) {
    // create new object on each property change
    // so Angular can catch object reference change
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    setTimeout(() => {
      pop.show();
    });
  }
}`;

localeExample =
`import { defineLocale } from 'ngx-foundation/chronos';
import { esLocale } from 'ngx-foundation/locale';
defineLocale('es', esLocale);`;

localesTemplate =
`<div class="grid-x grid-margin-x">
  <div class="small-6 medium-3 large-2 cell">
    <select
      class="custom-select"
      [(ngModel)]="locale"
      (ngModelChange)="applyLocale(dp);">
      <option *ngFor="let loc of locales" [value]="loc">{{ loc }}</option>
    </select>
  </div>
  <div class="small-5 medium-6 large-4 cell">
    <input placeholder="Datepicker"
      type="text"
      bsDatepicker
      #dp="bsDatepicker">
  </div>
  <div class="small-4 medium-12 large-4 cell">
    <input type="button"
      class="button small success"
      value="Date Picker"
      (click)="dp.show()" />
  </div>
</div>

<div class="grid-x grid-margin-x">
  <div class="small-6 medium-3 large-2 cell">
    <select
      class="custom-select"
      [(ngModel)]="locale"
      (ngModelChange)="applyLocale(dpr);">
      <option *ngFor="let loc of locales" [value]="loc">{{ loc }}</option>
    </select>
  </div>
  <div class="small-5 medium-6 large-4 cell">
    <input placeholder="Daterangepicker"
      type="text"
      bsDaterangepicker
      #dpr="bsDaterangepicker">
  </div>
  <div class="small-4 medium-12 large-4 cell">
    <input type="button"
      class="button small success"
      value="Date Range Picker"
      (click)="dpr.show()"/>
  </div>
</div>`;

localesComponent =
`import { Component } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'demo-datepicker-change-locale',
  templateUrl: './change-locale.html'
})
export class DemoDatepickerChangeLocaleComponent {
  locale = 'en';
  locales = listLocales();

  constructor(private localeService: BsLocaleService) {}

  applyLocale(pop: any) {
    this.localeService.use(this.locale);
    pop.hide();
    pop.show();
  }
}`;

minMaxTemplate =
`<div class="grid-x grid-margin-x">
  <div class="small-6 medium-4 cell">
    <input
      type="text"
      placeholder="Datepicker"
      ngModel
      bsDatepicker
      [minDate]="minDate"
      [maxDate]="maxDate">
  </div>
  <div class="small-6 medium-4 cell">
    <input
      type="text"
      placeholder="Daterangepicker"
      ngModel
      bsDaterangepicker
      [minDate]="minDate"
      [maxDate]="maxDate">
  </div>
</div>`;

minMaxComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-datepicker-min-max',
  templateUrl: './min-max.component.html'
})
export class DemoDatepickerMinMaxComponent {
  minDate: Date;
  maxDate: Date;

  constructor() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  }
}`;

placementTemplate =
`<div class="grid-x grid-margin-x">
  <div class="small-6 medium-3 cell">
    <p>The datepicker's placement is right</p>
    <label>Right
      <input
        type="text"
        placeholder="Datepicker"
        bsDatepicker
        placement="right">
    </label>
  </div>
  <div class="small-6 medium-3 cell">
    <p>The datepicker's placement is top</p>
    <label>Top
      <input
        type="text"
        placeholder="Datepicker"
        bsDatepicker
        placement="top">
    </label>
  </div>
  <div class="small-6 medium-3 cell">
    <p>The datepicker's placement is bottom</p>
    <label>Bottom
      <input
        type="text"
        placeholder="Datepicker"
        bsDatepicker
        placement="bottom">
    </label>
    </div>
  <div class="small-6 medium-3 cell">
    <p>The datepicker's placement is left</p>
    <label>Left
      <input
        type="text"
        placeholder="Datepicker"
        bsDatepicker
        placement="left">
    </label>
  </div>
</div>`;

placementComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-datepicker-placement',
  templateUrl: './placement.html'
})
export class DemoDatepickerPlacementComponent {}`;

  myForm = new FormGroup({
    myDateYMD: new FormControl(new Date()),
    myDateFull: new FormControl(new Date()),
    myDateMDY: new FormControl(new Date())
  });

  constructor(private localeService: BsLocaleService) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];

    this.dateMinDate = new Date();
    this.dateMaxDate = new Date();
    this.dateMinDate.setDate(this.dateMinDate.getDate() - 1);
    this.dateMaxDate.setDate(this.dateMaxDate.getDate() + 7);
  }

  applyTheme(pop: any) {
    // create new object on each property change
    // so Angular can catch object reference change
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    setTimeout(() => {
      pop.show();
    });
  }

  applyLocale(pop: any) {
    this.localeService.use(this.locale);
    pop.hide();
    pop.show();
  }
}
