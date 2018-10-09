import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  // Dynamic Body Content
  items = ['Item 1', 'Item 2', 'Item 3'];

  isFirstOpen = true;
  oneAtATime = true;
  isCollapsed = true;

  usage =
`import { AccordionModule } from 'ngx-foundation';

@NgModule({
  imports: [AccordionModule.forRoot(),...]
})
export class AppModule(){}`;

  basicTemplate =
`<accordion>
  <accordion-group [isDisabled]="true" heading="Static Header, Disabled">
    End User shouldn't be able to see this shtuff since it's disabled.
  </accordion-group>
  <accordion-group heading="Another group">
    <p>Some content</p>
  </accordion-group>
  <accordion-group heading="Another group">
    <p>Some content</p>
  </accordion-group>
  <accordion-group heading="Another group">
    <p>Some content</p>
  </accordion-group>
</accordion>`;

  basicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-accordion-basic',
  templateUrl: './basic.html'
})
export class DemoAccordionBasicComponent {}`;

  groupEventTemplate =
`<accordion>
  <accordion-group heading="Group without isOpenChange event listener">
    <p>Some content</p>
  </accordion-group>
  <accordion-group heading="Group with isOpenChange event listener" (isOpenChange)="log($event)">
    <p>Some content</p>
  </accordion-group>
  <accordion-group heading="Group with isOpenChange event listener" (isOpenChange)="log($event)">
    <p>Some content</p>
  </accordion-group>
</accordion>`;

  groupEventComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-accordion-open-event',
  templateUrl: './open-event.html'
})
export class DemoAccordionOpenEventComponent {
  log(event: boolean) {
    console.log(\`Accordion has been \${event ? 'opened' : 'closed'}\`);
  }
}`;

  initiallyExpandedTemplate =
`<accordion>
  <accordion-group heading="Content 1">
    <p>accordion 1</p>
  </accordion-group>
  <accordion-group heading="Initially expanded"
                   [isOpen]="isFirstOpen">
    This content is straight in the template.
  </accordion-group>
  <accordion-group heading="Content 2">
    <p>accordion 3</p>
  </accordion-group>
</accordion>`;

  initiallyExpandedComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-accordion-opened',
  templateUrl: './opened.html'
})
export class DemoAccordionOpenedComponent {
  isFirstOpen = true;
}`;

  dynamicTemplate =
`<p>
  <button type="button" class="btn btn-primary btn-sm" (click)="addGroupItem()">
    Add Group Item
  </button>
</p>

<accordion>
  <accordion-group *ngFor="let group of groups" [heading]="group.title">
    {{ group?.content }}
  </accordion-group>
</accordion>`;

  dynamicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-accordion-dynamic',
  templateUrl: './dynamic.html'
})
export class DemoAccordionDynamicComponent {
  groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  addGroupItem(): void {
    this.groups.push({
      title: \`Dynamic Group Header - \${this.groups.length + 1}\`,
      content: \`Dynamic Group Body - \${this.groups.length + 1}\`
    });
  }
}`;

  dynamicBodyTemplate =
`<accordion>
  <accordion-group heading="Dynamic Body Content">
    <p>The body of the accordion group grows to fit the contents</p>
    <button type="button" class="button primary tiny" (click)="addItem()">Add
      Item
    </button>
    <div *ngFor="let item of items">{{item}}</div>
  </accordion-group>
  <accordion-group heading="Content 2">
    <p>accordion 2</p>
  </accordion-group>
  <accordion-group heading="Content 3">
    <p>accordion 3</p>
  </accordion-group>
</accordion>`;

  dynamicBodyComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-accordion-dynamic-body',
  templateUrl: './dynamic-body.html'
})
export class DemoAccordionDynamicBodyComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];

  addItem(): void {
    this.items.push(\`Item \${this.items.length + 1}\`);
  }
}`;

  onlyOneTemplate =
`<accordion [closeOthers]="oneAtATime">
  <accordion-group heading="Header">
    This content is straight in the template.
  </accordion-group>
  <accordion-group heading="Content 1">
    <p>Content 1</p>
  </accordion-group>
  <accordion-group heading="Content 2">
    <p>Content 2</p>
  </accordion-group>
</accordion>`;

  onlyOneComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-accordion-one-time',
  templateUrl: './one-at-a-time.html'
})
export class DemoAccordionOneAtATimeComponent {
  oneAtATime = true;
}`;

collapseUsage =
`import { CollapseModule } from 'ngx-foundation';

@NgModule({
  imports: [CollapseModule.forRoot(),...]
})
export class AppModule(){}`;

  collapseTemplate =
`<div class="accordion">
  <button type="button"
    class="button primary"
    (click)="isCollapsed = !isCollapsed"
    [attr.aria-expanded]="!isCollapsed"
    aria-controls="collapseBasic">
    {{isCollapsed ? 'Show More' : 'Hide'}} Content
  </button>
  <div id="collapseBasic" [collapse]="isCollapsed" class="callout primary">
    Some content that is collapsed on page load.
  </div>
</div>`;

  collapseComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'no-ul-accordion-demo',
  templateUrl: './no-ul-accordion.html'
})
export class CollapseDemoComponent {
  isCollapsed = false;
}`;

// End Code Snippets
// ------------------------


  log(event: boolean) {
    console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
  }

  addGroupItem(): void {
    this.groups.push({
      title: `Dynamic Group Header - ${this.groups.length + 1}`,
      content: `Dynamic Group Body - ${this.groups.length + 1}`
    });
  }

  // Dynamic Body Content
  addItem(): void {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  constructor() { }

  ngOnInit() {
  }

}
