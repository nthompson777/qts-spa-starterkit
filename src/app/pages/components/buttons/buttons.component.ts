import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  myForm: FormGroup;
  radioModel = 'Middle';
  disabled = false;
  toggleModel = 'On';

  // Code Snippets
  usage =
`import { ButtonsModule } from 'ngx-foundation';

@NgModule({
  imports: [ButtonsModule.forRoot(),...]
})
export class AppModule(){}`;

  checkboxTemplate =
`<pre class="callout">{{myForm.value | json}}</pre>
<form [formGroup]="myForm">
  <div class="small button-group">
    <label class="button primary selectable" [class.active]="myForm.value.left"
            btnCheckbox formControlName="left"
            tabindex="0" role="button">Left</label>
    <label class="button primary selectable" [class.active]="myForm.value.middle"
            btnCheckbox formControlName="middle"
            tabindex="0" role="button">Middle</label>
    <label class="button primary selectable" [class.active]="myForm.value.right"
            btnCheckbox formControlName="right"
            tabindex="0" role="button">Right</label>
  </div>
</form>`;

  checkboxComponent =
`import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'demo-buttons-checkbox-reactiveforms',
  templateUrl: './checkbox-reactiveforms.html'
})
export class DemoButtonsCheckboxReactiveFormsComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      left: false,
      middle: true,
      right: false
    });
  }
}`;

  toggledTemplate =
`<pre class="callout">Button is toggled {{toggleModel}}.</pre>
<button type="button" class="button primary selectable"
        [(ngModel)]="toggleModel" btnCheckbox
        btnCheckboxTrue="On"
        btnCheckboxFalse="Off">
  Button Toggled {{toggleModel}}
</button>`;

  toggledComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-custom-checkbox-value',
  templateUrl: './custom-checkbox-value.html'
})
export class DemoButtonsCustomCheckboxValueComponent {
  toggleModel = 'On';
}`;

  radioTemplate =
`<pre class="callout">{{radioModel || 'null'}}</pre>
<div class="small button-group">
  <label class="button primary selectable" [(ngModel)]="radioModel"
          btnRadio="Left" tabindex="0" role="button">Left</label>
  <label class="button primary selectable" [(ngModel)]="radioModel"
          btnRadio="Middle" tabindex="0" role="button">Middle</label>
  <label class="button primary selectable" [(ngModel)]="radioModel"
          btnRadio="Right" tabindex="0" role="button">Right</label>
</div>
<div class="small button-group" btnRadioGroup [(ngModel)]="radioModel">
  <label class="button success selectable" btnRadio="Left"
          tabindex="0" role="button">Left</label>
  <label class="button success selectable" btnRadio="Middle"
          tabindex="0" role="button">Middle</label>
  <label class="button success selectable" btnRadio="Right"
          tabindex="0" role="button">Right</label>
</div>`;

  radioComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-buttons-radio',
  templateUrl: './radio.html'
})
export class DemoButtonsRadioComponent {
  radioModel = 'Middle';
}`;

  disabledTemplate =
`<div class="button-group">
  <button type="button" class="button primary" [disabled]="disabled">Button</button>
  <button type="button" class="button warning" (click)="disabled = !disabled">Enable/Disable</button>
</div>`;

  disabledComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-buttons-disabled',
  templateUrl: './disabled.html'
})
export class DemoButtonsDisabledComponent {
  disabled = false;
}`;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      left: false,
      middle: true,
      right: false
    });
  }

}
