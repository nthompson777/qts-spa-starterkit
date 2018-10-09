import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { TypeaheadMatch } from 'ngx-foundation/typeahead';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent {
  selectedBasic: string;
  selectedItem: string;

  asyncSelected: string;
  typeaheadLoading: boolean;
  dataSource: Observable<any>;
  groupSelected: string;

  typeaheadSingleWords = true;
  selected: string;
  selectedSpaces: string;
  selectedDropup: string;
  selectedOnBlur: string;
  selectedBody: string;
  selectedResult: string;
  selectedScrollable: string;
  optionOnBlur: any;
  selectedMinLength: string;
  selectedLatinize: string;
  selectedValue: string;
  selectedOption: any;
  noResult = false;
  noResultML = false;


  model = {
    address: '312 Sundown Lane',
    state: null
  };

  stateCtrl = new FormControl();

  myForm = new FormGroup({
    state: this.stateCtrl
  });

  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

  customSelected: string;
  statesComplex: any[] = [
    { id: 1, name: 'Alabama', region: 'South' },
    { id: 2, name: 'Alaska', region: 'West' },
    { id: 3, name: 'Arizona', region: 'West' },
    { id: 4, name: 'Arkansas', region: 'South' },
    { id: 5, name: 'California', region: 'West' },
    { id: 6, name: 'Colorado', region: 'West' },
    { id: 7, name: 'Connecticut', region: 'Northeast' },
    { id: 8, name: 'Delaware', region: 'South' },
    { id: 9, name: 'Florida', region: 'South' },
    { id: 10, name: 'Georgia', region: 'South' },
    { id: 11, name: 'Hawaii', region: 'West' },
    { id: 12, name: 'Idaho', region: 'West' },
    { id: 13, name: 'Illinois', region: 'Midwest' },
    { id: 14, name: 'Indiana', region: 'Midwest' },
    { id: 15, name: 'Iowa', region: 'Midwest' },
    { id: 16, name: 'Kansas', region: 'Midwest' },
    { id: 17, name: 'Kentucky', region: 'South' },
    { id: 18, name: 'Louisiana', region: 'South' },
    { id: 19, name: 'Maine', region: 'Northeast' },
    { id: 21, name: 'Maryland', region: 'South' },
    { id: 22, name: 'Massachusetts', region: 'Northeast' },
    { id: 23, name: 'Michigan', region: 'Midwest' },
    { id: 24, name: 'Minnesota', region: 'Midwest' },
    { id: 25, name: 'Mississippi', region: 'South' },
    { id: 26, name: 'Missouri', region: 'Midwest' },
    { id: 27, name: 'Montana', region: 'West' },
    { id: 28, name: 'Nebraska', region: 'Midwest' },
    { id: 29, name: 'Nevada', region: 'West' },
    { id: 30, name: 'New Hampshire', region: 'Northeast' },
    { id: 31, name: 'New Jersey', region: 'Northeast' },
    { id: 32, name: 'New Mexico', region: 'West' },
    { id: 33, name: 'New York', region: 'Northeast' },
    { id: 34, name: 'North Dakota', region: 'Midwest' },
    { id: 35, name: 'North Carolina', region: 'South' },
    { id: 36, name: 'Ohio', region: 'Midwest' },
    { id: 37, name: 'Oklahoma', region: 'South' },
    { id: 38, name: 'Oregon', region: 'West' },
    { id: 39, name: 'Pennsylvania', region: 'Northeast' },
    { id: 40, name: 'Rhode Island', region: 'Northeast' },
    { id: 41, name: 'South Carolina', region: 'South' },
    { id: 42, name: 'South Dakota', region: 'Midwest' },
    { id: 43, name: 'Tennessee', region: 'South' },
    { id: 44, name: 'Texas', region: 'South' },
    { id: 45, name: 'Utah', region: 'West' },
    { id: 46, name: 'Vermont', region: 'Northeast' },
    { id: 47, name: 'Virginia', region: 'South' },
    { id: 48, name: 'Washington', region: 'South' },
    { id: 49, name: 'West Virginia', region: 'South' },
    { id: 50, name: 'Wisconsin', region: 'Midwest' },
    { id: 51, name: 'Wyoming', region: 'West' }
  ];

  statesOnSelect: any[] = [
    { id: 1, name: 'Alabama', region: 'South' },
    { id: 2, name: 'Alaska', region: 'West' },
    { id: 3, name: 'Arizona', region: 'West' },
    { id: 4, name: 'Arkansas', region: 'South' },
    { id: 5, name: 'California', region: 'West' },
    { id: 6, name: 'Colorado', region: 'West' },
    { id: 7, name: 'Connecticut', region: 'Northeast' },
    { id: 8, name: 'Delaware', region: 'South' },
    { id: 9, name: 'Florida', region: 'South' },
    { id: 10, name: 'Georgia', region: 'South' },
    { id: 11, name: 'Hawaii', region: 'West' },
    { id: 12, name: 'Idaho', region: 'West' },
    { id: 13, name: 'Illinois', region: 'Midwest' },
    { id: 14, name: 'Indiana', region: 'Midwest' },
    { id: 15, name: 'Iowa', region: 'Midwest' },
    { id: 16, name: 'Kansas', region: 'Midwest' },
    { id: 17, name: 'Kentucky', region: 'South' },
    { id: 18, name: 'Louisiana', region: 'South' },
    { id: 19, name: 'Maine', region: 'Northeast' },
    { id: 21, name: 'Maryland', region: 'South' },
    { id: 22, name: 'Massachusetts', region: 'Northeast' },
    { id: 23, name: 'Michigan', region: 'Midwest' },
    { id: 24, name: 'Minnesota', region: 'Midwest' },
    { id: 25, name: 'Mississippi', region: 'South' },
    { id: 26, name: 'Missouri', region: 'Midwest' },
    { id: 27, name: 'Montana', region: 'West' },
    { id: 28, name: 'Nebraska', region: 'Midwest' },
    { id: 29, name: 'Nevada', region: 'West' },
    { id: 30, name: 'New Hampshire', region: 'Northeast' },
    { id: 31, name: 'New Jersey', region: 'Northeast' },
    { id: 32, name: 'New Mexico', region: 'West' },
    { id: 33, name: 'New York', region: 'Northeast' },
    { id: 34, name: 'North Dakota', region: 'Midwest' },
    { id: 35, name: 'North Carolina', region: 'South' },
    { id: 36, name: 'Ohio', region: 'Midwest' },
    { id: 37, name: 'Oklahoma', region: 'South' },
    { id: 38, name: 'Oregon', region: 'West' },
    { id: 39, name: 'Pennsylvania', region: 'Northeast' },
    { id: 40, name: 'Rhode Island', region: 'Northeast' },
    { id: 41, name: 'South Carolina', region: 'South' },
    { id: 42, name: 'South Dakota', region: 'Midwest' },
    { id: 43, name: 'Tennessee', region: 'South' },
    { id: 44, name: 'Texas', region: 'South' },
    { id: 45, name: 'Utah', region: 'West' },
    { id: 46, name: 'Vermont', region: 'Northeast' },
    { id: 47, name: 'Virginia', region: 'South' },
    { id: 48, name: 'Washington', region: 'South' },
    { id: 49, name: 'West Virginia', region: 'South' },
    { id: 50, name: 'Wisconsin', region: 'Midwest' },
    { id: 51, name: 'Wyoming', region: 'West' }
  ];

  frenchWords: string[] = [
    'popularisé',
    'français',
    'intéressé',
    'générateur',
    'répandue',
    'répétition',
    'súper'
  ];

usage =
`import { TypeaheadModule } from 'ngx-foundation';

@NgModule({
  imports: [TypeaheadModule.forRoot(),...]
})
export class AppModule(){}`;

basicTemplate =
`<div class="callout">Model: {{selectedBasic | json}}</div>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <label>Type in a U.S. State
      <input [(ngModel)]="selectedBasic"
        [typeahead]="states"
        type="text"
        placeholder="U.S. States Only">
    </label>
  </div><!-- /cell -->
</div><!-- /grid -->`;

basicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-typeahead-basic',
  templateUrl: './basic.html'
})
export class DemoTypeaheadBasicComponent {
  selected: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
}`;

itemTemplate =
`<div class="callout">Model: {{selectedBasic | json}}</div>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <label>Type in a U.S. State
      <input [(ngModel)]="selectedBasic"
        [typeahead]="states"
        type="text"
        placeholder="U.S. States Only">
    </label>
  </div><!-- /cell -->
</div><!-- /grid -->`;

itemComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-typeahead-item-template',
  templateUrl: './item-template.html'
})
export class DemoTypeaheadItemTemplateComponent {
  selectedBasic: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
}`;

optionTemplate =
`<div class="callout">Model: {{customSelected | json}}</div>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <label>Type in a U.S. State
      <input [(ngModel)]="customSelected"
        [typeahead]="statesComplex"
        typeaheadOptionField="name"
        type="text"
        placeholder="U.S. States Only">
    </label>
  </div><!-- /cell -->
</div><!-- /grid -->`;

optionComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-typeahead-field',
  templateUrl: './field.html'
})
export class DemoTypeaheadFieldComponent {
  customSelected: string;
  statesComplex: any[] = [
    { id: 1, name: 'Alabama', region: 'South' },
    { id: 2, name: 'Alaska', region: 'West' },
    { id: 3, name: 'Arizona', region: 'West' },
    { id: 4, name: 'Arkansas', region: 'South' },
    { id: 5, name: 'California', region: 'West' },
    { id: 6, name: 'Colorado', region: 'West' },
    { id: 7, name: 'Connecticut', region: 'Northeast' },
    { id: 8, name: 'Delaware', region: 'South' },
    { id: 9, name: 'Florida', region: 'South' },
    { id: 10, name: 'Georgia', region: 'South' },
    { id: 11, name: 'Hawaii', region: 'West' },
    { id: 12, name: 'Idaho', region: 'West' },
    { id: 13, name: 'Illinois', region: 'Midwest' },
    { id: 14, name: 'Indiana', region: 'Midwest' },
    { id: 15, name: 'Iowa', region: 'Midwest' },
    { id: 16, name: 'Kansas', region: 'Midwest' },
    { id: 17, name: 'Kentucky', region: 'South' },
    { id: 18, name: 'Louisiana', region: 'South' },
    { id: 19, name: 'Maine', region: 'Northeast' },
    { id: 21, name: 'Maryland', region: 'South' },
    { id: 22, name: 'Massachusetts', region: 'Northeast' },
    { id: 23, name: 'Michigan', region: 'Midwest' },
    { id: 24, name: 'Minnesota', region: 'Midwest' },
    { id: 25, name: 'Mississippi', region: 'South' },
    { id: 26, name: 'Missouri', region: 'Midwest' },
    { id: 27, name: 'Montana', region: 'West' },
    { id: 28, name: 'Nebraska', region: 'Midwest' },
    { id: 29, name: 'Nevada', region: 'West' },
    { id: 30, name: 'New Hampshire', region: 'Northeast' },
    { id: 31, name: 'New Jersey', region: 'Northeast' },
    { id: 32, name: 'New Mexico', region: 'West' },
    { id: 33, name: 'New York', region: 'Northeast' },
    { id: 34, name: 'North Dakota', region: 'Midwest' },
    { id: 35, name: 'North Carolina', region: 'South' },
    { id: 36, name: 'Ohio', region: 'Midwest' },
    { id: 37, name: 'Oklahoma', region: 'South' },
    { id: 38, name: 'Oregon', region: 'West' },
    { id: 39, name: 'Pennsylvania', region: 'Northeast' },
    { id: 40, name: 'Rhode Island', region: 'Northeast' },
    { id: 41, name: 'South Carolina', region: 'South' },
    { id: 42, name: 'South Dakota', region: 'Midwest' },
    { id: 43, name: 'Tennessee', region: 'South' },
    { id: 44, name: 'Texas', region: 'South' },
    { id: 45, name: 'Utah', region: 'West' },
    { id: 46, name: 'Vermont', region: 'Northeast' },
    { id: 47, name: 'Virginia', region: 'South' },
    { id: 48, name: 'Washington', region: 'South' },
    { id: 49, name: 'West Virginia', region: 'South' },
    { id: 50, name: 'Wisconsin', region: 'Midwest' },
    { id: 51, name: 'Wyoming', region: 'West' }
  ];
}`;

asyncTemplate =
`<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <label>Type in a U.S. State
      <input [(ngModel)]="asyncSelected"
        [typeahead]="dataSource"
        (typeaheadLoading)="changeTypeaheadLoading($event)"
        (typeaheadOnSelect)="typeaheadOnSelect($event)"
        [typeaheadOptionsLimit]="7"
        typeaheadOptionField="name"
        placeholder="Locations loaded with timeout"
        type="text">
    </label>
    <div *ngIf="typeaheadLoading">Loading...</div>
  </div><!-- /cell -->
</div><!-- /grid -->`;

asyncComponent =
`import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';
import { TypeaheadMatch } from 'ngx-foundation/typeahead';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'demo-typeahead-async',
  templateUrl: './async.html'
})
export class DemoTypeaheadAsyncComponent {
  asyncSelected: string;
  typeaheadLoading: boolean;
  typeaheadNoResults: boolean;
  dataSource: Observable<any>;
  statesComplex: any[] = [
    { id: 1, name: 'Alabama', region: 'South' },
    { id: 2, name: 'Alaska', region: 'West' },
    { id: 3, name: 'Arizona', region: 'West' },
    { id: 4, name: 'Arkansas', region: 'South' },
    { id: 5, name: 'California', region: 'West' },
    { id: 6, name: 'Colorado', region: 'West' },
    { id: 7, name: 'Connecticut', region: 'Northeast' },
    { id: 8, name: 'Delaware', region: 'South' },
    { id: 9, name: 'Florida', region: 'South' },
    { id: 10, name: 'Georgia', region: 'South' },
    { id: 11, name: 'Hawaii', region: 'West' },
    { id: 12, name: 'Idaho', region: 'West' },
    { id: 13, name: 'Illinois', region: 'Midwest' },
    { id: 14, name: 'Indiana', region: 'Midwest' },
    { id: 15, name: 'Iowa', region: 'Midwest' },
    { id: 16, name: 'Kansas', region: 'Midwest' },
    { id: 17, name: 'Kentucky', region: 'South' },
    { id: 18, name: 'Louisiana', region: 'South' },
    { id: 19, name: 'Maine', region: 'Northeast' },
    { id: 21, name: 'Maryland', region: 'South' },
    { id: 22, name: 'Massachusetts', region: 'Northeast' },
    { id: 23, name: 'Michigan', region: 'Midwest' },
    { id: 24, name: 'Minnesota', region: 'Midwest' },
    { id: 25, name: 'Mississippi', region: 'South' },
    { id: 26, name: 'Missouri', region: 'Midwest' },
    { id: 27, name: 'Montana', region: 'West' },
    { id: 28, name: 'Nebraska', region: 'Midwest' },
    { id: 29, name: 'Nevada', region: 'West' },
    { id: 30, name: 'New Hampshire', region: 'Northeast' },
    { id: 31, name: 'New Jersey', region: 'Northeast' },
    { id: 32, name: 'New Mexico', region: 'West' },
    { id: 33, name: 'New York', region: 'Northeast' },
    { id: 34, name: 'North Dakota', region: 'Midwest' },
    { id: 35, name: 'North Carolina', region: 'South' },
    { id: 36, name: 'Ohio', region: 'Midwest' },
    { id: 37, name: 'Oklahoma', region: 'South' },
    { id: 38, name: 'Oregon', region: 'West' },
    { id: 39, name: 'Pennsylvania', region: 'Northeast' },
    { id: 40, name: 'Rhode Island', region: 'Northeast' },
    { id: 41, name: 'South Carolina', region: 'South' },
    { id: 42, name: 'South Dakota', region: 'Midwest' },
    { id: 43, name: 'Tennessee', region: 'South' },
    { id: 44, name: 'Texas', region: 'South' },
    { id: 45, name: 'Utah', region: 'West' },
    { id: 46, name: 'Vermont', region: 'Northeast' },
    { id: 47, name: 'Virginia', region: 'South' },
    { id: 48, name: 'Washington', region: 'South' },
    { id: 49, name: 'West Virginia', region: 'South' },
    { id: 50, name: 'Wisconsin', region: 'Midwest' },
    { id: 51, name: 'Wyoming', region: 'West' }
  ];

  constructor() {
    this.dataSource = Observable.create((observer: any) => {
      // Runs on every search
      observer.next(this.asyncSelected);
    })
      .pipe(
        mergeMap((token: string) => this.getStatesAsObservable(token))
      );
  }

  getStatesAsObservable(token: string): Observable<any> {
    const query = new RegExp(token, 'ig');

    return of(
      this.statesComplex.filter((state: any) => {
        return query.test(state.name);
      })
    );
  }

  changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    console.log('Selected value: ', e.value);
  }
}`;

delayTemplate =
`<div class="callout">Model: {{selected | json}}</div>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <label>Type in a U.S. State
      <input [(ngModel)]="selected"
        [typeahead]="states"
        typeaheadWaitMs="1000"
        type="text">
    </label>
  </div><!-- /cell -->
</div><!-- /grid -->`;

delayComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-typeahead-delay',
  templateUrl: './delay.html'
})
export class DemoTypeaheadDelayComponent {
  selected: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
}`;

templateDrivenTemplate =
`<div class="callout"><pre>Model: {{model | json}}</pre></div>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <form>
      <label for="address">Address
        <input type="text"
          id="address"
          required
          [(ngModel)]="model.address"
          name="address">
      </label>
      <label for="state">State
        <input id="state"
          name="state"
          [(ngModel)]="model.state"
          [typeahead]="states"
          type="text"
          placeholder="U.S. States Only">
      </label>
    </form>
  </div><!-- /cell -->
</div><!-- /grid -->`;

templateDrivenComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-typeahead-form',
  templateUrl: './form.html'
})
export class DemoTypeaheadFormComponent {
  model = {
    address: '312 Sundown Lane',
    state: null
  };
  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
}`;

reactiveTemplate =
`<div class="callout">Model: {{myForm.value.state | json}}</div>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <form [formGroup]="myForm">
      <label>Type in a U.S. State
        <input type="text"
          formControlName="state"
          [typeahead]="states"
          [typeaheadOptionsLimit]="7"
          [typeaheadMinLength]="0"
          placeholder="Typeahead inside a form">
      </label>
    </form>
  </div><!-- /cell -->
</div><!-- /grid -->`;

reactiveComponent =
`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'demo-typeahead-reactive-form',
  templateUrl: './reactive-form.html'
})
export class DemoTypeaheadReactiveFormComponent {
  stateCtrl = new FormControl();

  myForm = new FormGroup({
    state: this.stateCtrl
  });

  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
}`;

groupingTemplate =
`<div class="callout">Model: {{groupSelected | json}}</div>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <label>Type in a U.S. State
      <input type="text"
        [ngModel]="groupSelected"
        [typeahead]="statesComplex"
        typeaheadOptionField="name"
        typeaheadGroupField="region"
        placeholder="U.S. States Only">
    </label>
  </div><!-- /cell -->
</div><!-- /grid -->`;

groupingComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-typeahead-grouping',
  templateUrl: './grouping.html'
})
export class DemoTypeaheadGroupingComponent {
  groupSelected: string;
  statesComplex: any[] = [
    { id: 1, name: 'Alabama', region: 'South' },
    { id: 2, name: 'Alaska', region: 'West' },
    { id: 3, name: 'Arizona', region: 'West' },
    { id: 4, name: 'Arkansas', region: 'South' },
    { id: 5, name: 'California', region: 'West' },
    { id: 6, name: 'Colorado', region: 'West' },
    { id: 7, name: 'Connecticut', region: 'Northeast' },
    { id: 8, name: 'Delaware', region: 'South' },
    { id: 9, name: 'Florida', region: 'South' },
    { id: 10, name: 'Georgia', region: 'South' },
    { id: 11, name: 'Hawaii', region: 'West' },
    { id: 12, name: 'Idaho', region: 'West' },
    { id: 13, name: 'Illinois', region: 'Midwest' },
    { id: 14, name: 'Indiana', region: 'Midwest' },
    { id: 15, name: 'Iowa', region: 'Midwest' },
    { id: 16, name: 'Kansas', region: 'Midwest' },
    { id: 17, name: 'Kentucky', region: 'South' },
    { id: 18, name: 'Louisiana', region: 'South' },
    { id: 19, name: 'Maine', region: 'Northeast' },
    { id: 21, name: 'Maryland', region: 'South' },
    { id: 22, name: 'Massachusetts', region: 'Northeast' },
    { id: 23, name: 'Michigan', region: 'Midwest' },
    { id: 24, name: 'Minnesota', region: 'Midwest' },
    { id: 25, name: 'Mississippi', region: 'South' },
    { id: 26, name: 'Missouri', region: 'Midwest' },
    { id: 27, name: 'Montana', region: 'West' },
    { id: 28, name: 'Nebraska', region: 'Midwest' },
    { id: 29, name: 'Nevada', region: 'West' },
    { id: 30, name: 'New Hampshire', region: 'Northeast' },
    { id: 31, name: 'New Jersey', region: 'Northeast' },
    { id: 32, name: 'New Mexico', region: 'West' },
    { id: 33, name: 'New York', region: 'Northeast' },
    { id: 34, name: 'North Dakota', region: 'Midwest' },
    { id: 35, name: 'North Carolina', region: 'South' },
    { id: 36, name: 'Ohio', region: 'Midwest' },
    { id: 37, name: 'Oklahoma', region: 'South' },
    { id: 38, name: 'Oregon', region: 'West' },
    { id: 39, name: 'Pennsylvania', region: 'Northeast' },
    { id: 40, name: 'Rhode Island', region: 'Northeast' },
    { id: 41, name: 'South Carolina', region: 'South' },
    { id: 42, name: 'South Dakota', region: 'Midwest' },
    { id: 43, name: 'Tennessee', region: 'South' },
    { id: 44, name: 'Texas', region: 'South' },
    { id: 45, name: 'Utah', region: 'West' },
    { id: 46, name: 'Vermont', region: 'Northeast' },
    { id: 47, name: 'Virginia', region: 'South' },
    { id: 48, name: 'Washington', region: 'South' },
    { id: 49, name: 'West Virginia', region: 'South' },
    { id: 50, name: 'Wisconsin', region: 'Midwest' },
    { id: 51, name: 'Wyoming', region: 'West' }
  ];
}`;

spacesTemplate =
`<button type="button" class="button primary"
(click)="typeaheadSingleWords = !typeaheadSingleWords">
Toggle typeaheadSingleWords
</button>
<div class="callout"><pre>typeaheadSingleWords: {{typeaheadSingleWords}}
  Model: {{selected | json}}</pre>
</div>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <label>Type in a U.S. State
      <input [(ngModel)]="selected"
        [typeahead]="states"
        [typeaheadSingleWords]="typeaheadSingleWords"
        type="text"
        placeholder="U.S. States Only">
    </label>
  </div><!-- /cell -->
</div><!-- /grid -->`;

spacesComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-typeahead-single-world',
  templateUrl: './single-world.html'
})
export class DemoTypeaheadSingleWorldComponent {
  typeaheadSingleWords = true;
  selected: string;
  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
}`;

phraseTemplate =
`<div class="callout"><pre>Model: {{selected | json}}</pre>
</div>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <label>Type in a U.S. State
      <input [(ngModel)]="selected"
        [typeahead]="states"
        [typeaheadSingleWords]="true"
        typeaheadPhraseDelimiters="&,"
        type="text"
        placeholder="U.S. States Only">
    </label>
  </div><!-- /cell -->
</div><!-- /grid -->`;

phraseComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-typeahead-phrase-delimiters',
  templateUrl: './phrase-delimiters.html'
})
export class DemoTypeaheadPhraseDelimitersComponent {
  selected: string;
  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
}`;

dropupTemplate =
`<div class="callout"><pre>Model: {{selectedDropup | json}}</pre>
</div>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <label>Type in a U.S. State
      <input [(ngModel)]="selectedDropup"
        [typeahead]="states"
        [dropup]="true"
        type="text"
        placeholder="U.S. States Only">
    </label>
  </div><!-- /cell -->
</div><!-- /grid -->`;

dropupComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-typeahead-phrase-delimiters',
  templateUrl: './phrase-delimiters.html'
})
export class DemoTypeaheadPhraseDelimitersComponent {
  selectedDropup: string;
  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
}`;

onblurTemplate =
`<div class="callout"><pre>Model: {{selectedOnBlur | json}}</pre>
</div>
<div class="callout"><pre>Option on blur: {{optionOnBlur | json}}</pre>
</div>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <label>Type in a U.S. State
      <input [(ngModel)]="selectedOnBlur"
        [typeahead]="states"
        (typeaheadOnBlur)="typeaheadOnBlur($event)"
        type="text"
        placeholder="U.S. States Only">
    </label>
  </div><!-- /cell -->
</div><!-- /grid -->`;

onblurComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-typeahead-container',
  templateUrl: './container.html'
})
export class DemoTypeaheadContainerComponent {
  selectedOnBlur: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
}`;

bodyTemplate =
`<div class="callout"><pre>Model: {{selectedBody | json}}</pre>
</div>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <label>Type in a U.S. State
      <input [(ngModel)]="selectedBody"
        [typeahead]="states"
        container="body"
        type="text"
        placeholder="U.S. States Only">
    </label>
  </div><!-- /cell -->
</div><!-- /grid -->`;

bodyComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-typeahead-container',
  templateUrl: './container.html'
})
export class DemoTypeaheadContainerComponent {
  selectedBody: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
}`;

resultTemplate =
`<div class="callout"><pre>Model: {{selectedResult | json}}</pre>
</div>
<div class="callout alert" *ngIf="noResult">No Results Found.</div>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <label>Type in a U.S. State
      <input [(ngModel)]="selectedResult"
        [typeahead]="states"
        (typeaheadNoResults)="typeaheadNoResults($event)"
        type="text"
        placeholder="U.S. States Only">
    </label>
  </div><!-- /cell -->
</div><!-- /grid -->`;

resultComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-typeahead-no-result',
  templateUrl: './no-result.html'
})
export class DemoTypeaheadNoResultComponent {
  selectedResult: string;
  noResult = false;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

  typeaheadNoResults(event: boolean): void {
    this.noResult = event;
  }
}`;

scrollableTemplate =
`<div class="callout"><pre>Model: {{selectedScrollable | json}}</pre>
</div>
<div class="callout alert" *ngIf="noResult">No Results Found.</div>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <label>Type in a U.S. State
      <input [(ngModel)]="selectedScrollable"
        [typeahead]="states"
        [typeaheadScrollable]="true"
        [typeaheadOptionsInScrollableView]="5"
        type="text"
        placeholder="U.S. States Only">
    </label>
  </div><!-- /cell -->
</div><!-- /grid -->`;

scrollableComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-typeahead-scrollable',
  templateUrl: './scrollable.html'
})
export class DemoTypeaheadScrollableComponent {
  selectedScrollable: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
}`;

minTemplate =
`<pre class="callout">Model: {{selectedMinLength | json}}</pre>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <label>Type in a U.S. State
      <input [(ngModel)]="selectedMinLength"
        [typeahead]="states"
        [typeaheadMinLength]="3"
        (typeaheadNoResults)="typeaheadNoResultsML($event)"
        type="text"
        placeholder="U.S. States Only">
    </label>
  </div><!-- /cell -->
</div><!-- /grid -->
<div class="callout alert" *ngIf="noResultML">No Results Found</div>`;

minComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-typeahead-minlength',
  templateUrl: './minlength.html'
})
export class DemoTypeaheadMinlengthComponent {
  selectedMinLength: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

  typeaheadNoResultsML(event: boolean): void {
    this.noResultML = event;
  }
}`;

latinizeTemplate =
`<div class="callout"><pre>Model: {{selectedLatinize | json}}</pre>
</div>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-4 cell">
    <label>Type Latinized Word - see Component tab below
      <input [(ngModel)]="selectedLatinize"
        [typeahead]="frenchWords"
        [typeaheadLatinize]="true"
        type="text"
        placeholder="Words from frenchWords string">
    </label>
  </div><!-- /cell -->
</div><!-- /grid -->`;

latinizeComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-typeahead-latinize',
  templateUrl: './latinize.html'
})
export class DemoTypeaheadLatinizeComponent {
  selected: string;
  frenchWords: string[] = [
    'popularisé',
    'français',
    'intéressé',
    'générateur',
    'répandue',
    'répétition',
    'súper'
    ];
}`;

onselectTemplate =
`<div class="callout"><pre>Model: {{selectedValue | json}}</pre>
<div class="callout"><pre>Selected option: {{selectedOption | json}}</pre>
</div>
<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <label>Type Latinized Word - see Component tab below
      <input [(ngModel)]="selectedValue"
        [typeahead]="statesOnSelect"
        typeaheadOptionField="name"
        (typeaheadOnSelect)="onSelect($event)"
        type="text"
        placeholder="U.S. States Only">
    </label>
  </div><!-- /cell -->
</div><!-- /grid -->`;

onselectComponent =
`import { Component } from '@angular/core';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';

@Component({
  selector: 'demo-typeahead-on-select',
  templateUrl: './on-select.html'
})
export class DemoTypeaheadOnSelectComponent {
  selectedValue: string;
  selectedOption: any;
  statesOnSelect: any[] = [
    { id: 1, name: 'Alabama', region: 'South' },
    { id: 2, name: 'Alaska', region: 'West' },
    { id: 3, name: 'Arizona', region: 'West' },
    { id: 4, name: 'Arkansas', region: 'South' },
    { id: 5, name: 'California', region: 'West' },
    { id: 6, name: 'Colorado', region: 'West' },
    { id: 7, name: 'Connecticut', region: 'Northeast' },
    { id: 8, name: 'Delaware', region: 'South' },
    { id: 9, name: 'Florida', region: 'South' },
    { id: 10, name: 'Georgia', region: 'South' },
    { id: 11, name: 'Hawaii', region: 'West' },
    { id: 12, name: 'Idaho', region: 'West' },
    { id: 13, name: 'Illinois', region: 'Midwest' },
    { id: 14, name: 'Indiana', region: 'Midwest' },
    { id: 15, name: 'Iowa', region: 'Midwest' },
    { id: 16, name: 'Kansas', region: 'Midwest' },
    { id: 17, name: 'Kentucky', region: 'South' },
    { id: 18, name: 'Louisiana', region: 'South' },
    { id: 19, name: 'Maine', region: 'Northeast' },
    { id: 21, name: 'Maryland', region: 'South' },
    { id: 22, name: 'Massachusetts', region: 'Northeast' },
    { id: 23, name: 'Michigan', region: 'Midwest' },
    { id: 24, name: 'Minnesota', region: 'Midwest' },
    { id: 25, name: 'Mississippi', region: 'South' },
    { id: 26, name: 'Missouri', region: 'Midwest' },
    { id: 27, name: 'Montana', region: 'West' },
    { id: 28, name: 'Nebraska', region: 'Midwest' },
    { id: 29, name: 'Nevada', region: 'West' },
    { id: 30, name: 'New Hampshire', region: 'Northeast' },
    { id: 31, name: 'New Jersey', region: 'Northeast' },
    { id: 32, name: 'New Mexico', region: 'West' },
    { id: 33, name: 'New York', region: 'Northeast' },
    { id: 34, name: 'North Dakota', region: 'Midwest' },
    { id: 35, name: 'North Carolina', region: 'South' },
    { id: 36, name: 'Ohio', region: 'Midwest' },
    { id: 37, name: 'Oklahoma', region: 'South' },
    { id: 38, name: 'Oregon', region: 'West' },
    { id: 39, name: 'Pennsylvania', region: 'Northeast' },
    { id: 40, name: 'Rhode Island', region: 'Northeast' },
    { id: 41, name: 'South Carolina', region: 'South' },
    { id: 42, name: 'South Dakota', region: 'Midwest' },
    { id: 43, name: 'Tennessee', region: 'South' },
    { id: 44, name: 'Texas', region: 'South' },
    { id: 45, name: 'Utah', region: 'West' },
    { id: 46, name: 'Vermont', region: 'Northeast' },
    { id: 47, name: 'Virginia', region: 'South' },
    { id: 48, name: 'Washington', region: 'South' },
    { id: 49, name: 'West Virginia', region: 'South' },
    { id: 50, name: 'Wisconsin', region: 'Midwest' },
    { id: 51, name: 'Wyoming', region: 'West' }
  ];

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
  }
}`;

  constructor() {
    this.dataSource = Observable.create((observer: any) => {
      // Runs on every search
      observer.next(this.asyncSelected);
    })
      .pipe(
        mergeMap((token: string) => this.getStatesAsObservable(token))
      );
  }

  getStatesAsObservable(token: string): Observable<any> {
    const query = new RegExp(token, 'ig');

    return of(
      this.statesComplex.filter((state: any) => {
        return query.test(state.name);
      })
    );
  }

  changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    console.log('Selected value: ', e.value);
  }

  typeaheadOnBlur(event: any): void {
    this.optionOnBlur = event.item;
  }

  typeaheadNoResults(event: boolean): void {
    this.noResult = event;
  }

  typeaheadNoResultsML(event: boolean): void {
    this.noResultML = event;
  }

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
  }

}
