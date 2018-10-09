import { Component } from '@angular/core';

@Component({
  selector: 'app-sortable',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.scss']
})
export class SortableComponent {

usage =
`import { SortableModule } from 'ngx-foundation';

@NgModule({
  imports: [SortableModule.forRoot(),...]
})
export class AppModule(){}`;

basicTemplate =
`<div class="grid-x grid-margin-x">
  <div class="small-6 medium-5 large-3 cell">
    <bs-sortable
      [(ngModel)]="itemStringsLeft"
      itemClass="callout sortable"
      itemActiveClass="active success"
      placeholderItem="Empty Column Drag Here"
      placeholderClass="callout sortable placeholder"
      wrapperClass="sortable-wrapper"
    ></bs-sortable><br>
    <pre class="callout primary">model: {{ itemStringsLeft | json }}</pre>
  </div><!-- /cell -->
  <div class="small-6 medium-5 large-3 cell">
    <bs-sortable
      [(ngModel)]="itemStringsRight"
      itemClass="callout sortable"
      itemActiveClass="active success"
      placeholderItem="Empty Column Drag Here"
      placeholderClass="callout sortable placeholder"
      wrapperClass="sortable-wrapper"
    ></bs-sortable><br>
    <pre class="callout primary">model: {{ itemStringsRight | json }}</pre>
  </div><!-- /cell -->
</div><!-- /grid -->`;

basicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'basic-demo',
  templateUrl: './basic.component.html'
})
export class DemoBasicComponent {
  itemStringsLeft = [
    'Batman',
    'Superman',
    'Wonder Woman',
    'Green Lantern'
  ];

  itemStringsRight = [
    'Flash',
    'Aquaman',
    'Martian Manhunter',
    'Green Arrow'
  ];
}`;

complexDataTemplate =
`<div class="grid-x grid-margin-x">
  <div class="small-6 medium-5 large-3 cell">
    <bs-sortable
      [(ngModel)]="itemObjectsLeft"
      fieldName="name"
      itemClass="callout sortable"
      itemActiveClass="active success"
      placeholderItem="Empty Column Drag Here"
      placeholderClass="callout sortable placeholder"
      wrapperClass="sortable-wrapper"
    ></bs-sortable><br>
    <pre class="callout primary">model: {{ itemObjectsLeft | json }}</pre>
  </div><!-- /cell -->
  <div class="small-6 medium-5 large-3 cell">
    <bs-sortable
      [(ngModel)]="itemObjectsRight"
      fieldName="name"
      itemClass="callout sortable"
      itemActiveClass="active success"
      placeholderItem="Empty Column Drag Here"
      placeholderClass="callout sortable placeholder"
      wrapperClass="sortable-wrapper"
    ></bs-sortable><br>
    <pre class="callout primary">model: {{ itemObjectsRight | json }}</pre>
  </div><!-- /cell -->
</div><!-- /grid -->`;

complexDataComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'complex-datamodel-demo',
  templateUrl: './complex-datamodel.component.html'
})
export class ComplexDatamodelDemoComponent {
  itemObjectsLeft: any[] = [
    { id: 1, name: 'Batman' },
    { id: 2, name: 'Superman' },
    { id: 3, name: 'Wonder Woman' },
    { id: 4, name: 'Green Lantern' }
  ];

  itemObjectsRight: any[] = [
    { id: 5, name: 'Flash' },
    { id: 6, name: 'Aquaman' },
    { id: 7, name: 'Martian Manhunter' },
    { id: 8, name: 'Green Arrow' }
  ];
}`;

customDataTemplate =
`<ng-template #customTemplate let-item="item" let-index="index"><span>{{index}}: {{item.value}}</span></ng-template>
<div class="grid-x grid-margin-x">
  <div class="small-6 medium-5 large-3 cell">
    <bs-sortable
      [(ngModel)]="customStringsLeft"
      [itemTemplate]="customTemplate"
      itemClass="callout sortable"
      itemActiveClass="active success"
      placeholderItem="Empty Column Drag Here"
      placeholderClass="callout sortable placeholder"
      wrapperClass="sortable-wrapper"
    ></bs-sortable><br>
    <pre class="callout primary">model: {{ customStringsLeft | json }}</pre>
  </div><!-- /cell -->
  <div class="small-6 medium-5 large-3 cell">
    <bs-sortable
      [(ngModel)]="customStringsRight"
      itemClass="callout sortable"
      itemActiveClass="active success"
      placeholderItem="Empty Column Drag Here"
      placeholderClass="callout sortable placeholder"
      wrapperClass="sortable-wrapper"
    ></bs-sortable><br>
    <pre class="callout primary">model: {{ customStringsRight | json }}</pre>
  </div><!-- /cell -->
</div><!-- /grid -->`;

customDataComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'custom-item-template-demo',
  templateUrl: './custom-item-template.html'
})
export class CustomItemTemplateDemoComponent {
  customStringsLeft: any[] = [
    'Batman',
    'Superman',
    'Wonder Woman',
    'Green Lantern'
  ];

  customStringsRight: any[] = [
    'Flash',
    'Aquaman',
    'Martian Manhunter',
    'Green Arrow'
  ];
}`;

  itemStringsLeft = [
    'Batman',
    'Superman',
    'Wonder Woman',
    'Green Lantern'
  ];

  itemStringsRight = [
    'Flash',
    'Aquaman',
    'Martian Manhunter',
    'Green Arrow'
  ];

  itemObjectsLeft: any[] = [
    { id: 1, name: 'Batman' },
    { id: 2, name: 'Superman' },
    { id: 3, name: 'Wonder Woman' },
    { id: 4, name: 'Green Lantern' }
  ];

  itemObjectsRight: any[] = [
    { id: 5, name: 'Flash' },
    { id: 6, name: 'Aquaman' },
    { id: 7, name: 'Martian Manhunter' },
    { id: 8, name: 'Green Arrow' }
  ];

  customStringsLeft: any[] = [
    'Batman',
    'Superman',
    'Wonder Woman',
    'Green Lantern'
  ];

  customStringsRight: any[] = [
    'Flash',
    'Aquaman',
    'Martian Manhunter',
    'Green Arrow'
  ];

  constructor() { }
}
