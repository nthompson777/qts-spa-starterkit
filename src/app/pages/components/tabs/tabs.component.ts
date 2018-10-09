import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { TabsetComponent } from 'ngx-foundation';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  tabs: any[] = [
    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
    { title: 'Dynamic Title 2', content: 'Dynamic content 2' },
    { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true }
  ];

  tabsCustomClass: any[] = [
    {
      title: 'Dynamic Title 1',
      content: 'Dynamic content 1',
      customClass: 'alert-color'
    },
    {
      title: 'Dynamic Title 2',
      content: 'Dynamic content 2',
      customClass: 'alert-color'
    }
  ];

  tabsScroll: any[] = [
    { title: 'Dynamic Tab 1', content: 'Dynamic content 1' },
    { title: 'Dynamic Tab 2', content: 'Dynamic content 2', removable: true },
    { title: 'Dynamic Tab 3', content: 'Dynamic content 3', removable: true }
  ];

usage =
`import { TabsModule } from 'ngx-foundation';

@NgModule({
  imports: [TabsModule.forRoot(),...]
})
export class AppModule(){}`;

basicTemplate =
`<tabset>
<tab heading="Basic Title 1">Basic content 1</tab>
<tab heading="Basic Title 2">Basic content 2</tab>
<tab heading="Basic Title 3">Basic content 3</tab>
</tabset>`;

basicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-tabs-basic',
  templateUrl: './basic.html'
})
export class DemoTabsBasicComponent {}`;

manualTemplate =
`<section>
  <div class="button-group">
    <button type="button" class="button small primary" (click)="selectTab(1)">Select second tab</button>
    <button type="button" class="button small secondary" (click)="selectTab(2)">Select third tab</button>
    <button type="button" class="button small primary" (click)="disableEnableTab()">
      Disable/Enable fourth tab
    </button>
  </div>
</section>
<section>
  <tabset #staticTabs>
    <tab heading="Static Tab 1">Tab 1 static content</tab>
    <tab heading="Static Tab 2">Tab 2 static content</tab>
    <tab heading="Static Tab 3">Tab 3 static content</tab>
    <tab heading="Static Tab 4">Tab 4 static content</tab>
  </tabset>
</section>`;

manualComponent =
`import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-foundation';

@Component({
  selector: 'demo-tabs-manual-selection',
  templateUrl: './manual-selection.html'
})
export class DemoTabsManualSelectionComponent {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].active = true;
  }

  disableEnable() {
    this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;
  }
}`;

dynamicTemplate =
`<div class="button-group" (click)="$event.preventDefault()">
  <button type="button" class="button primary small" (click)="addNewTab()">
    Add New Tab
  </button>
  <button type="button" class="button alert small" (click)="tabs = []"  *ngIf="tabs.length">
    Remove All Tabs
  </button>
</div>
<br>
<tabset>
  <tab heading="Static title">Static content</tab>
  <tab *ngFor="let tabz of tabs"
        [heading]="tabz.title"
        [active]="tabz.active"
        (select)="tabz.active = true"
        (deselect)="tabz.active = false"
        [disabled]="tabz.disabled"
        [removable]="tabz.removable"
        (removed)="removeTabHandler(tabz)"
        [customClass]="tabz.customClass">
    {{tabz?.content}}
  </tab>
</tabset>`;

dynamicComponent =
`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'demo-tabs-dynamic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dynamic.html'
})
export class DemoTabsDynamicComponent {
  tabs: any[] = [
    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
    { title: 'Dynamic Title 2', content: 'Dynamic content 2' },
    { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true }
  ];

  addNewTab(): void {
    const newTabIndex = this.tabs.length + 1;
    this.tabs.push({
      title: \`Dynamic Title \${newTabIndex}\`,
      content: \`Dynamic content \${newTabIndex}\`,
      disabled: false,
      removable: true
    });
  }

  removeTabHandler(tab: any): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    console.log('Remove Tab handler');
  }
}`;

verticalTemplate =
`<tabset [vertical]="true" type="tabs">
  <tab heading="Vertical 1">Vertical content 1</tab>
  <tab heading="Vertical 2">Vertical content 2</tab>
</tabset>`;

verticalComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-tabs-vertical',
  templateUrl: './vertical.html'
})
export class DemoTabsVerticalComponent {}`;

customClassTemplate =
`<tabset>
  <tab heading="Static title" customClass="customClass">Static content</tab>
  <tab *ngFor="let tabz of tabsCustomClass"
        [heading]="tabz.title"
        [customClass]="tabz.customClass">
    {{tabz?.content}}
  </tab>
</tabset>`;

customClassComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-tabs-custom-class',
  templateUrl: './custom-class.html'
})
export class DemoTabsCustomClassComponent {
  tabsCustomClass: any[] = [
    {
      title: 'Dynamic Title 1',
      content: 'Dynamic content 1',
      customClass: 'alert-color'
    },
    {
      title: 'Dynamic Title 2',
      content: 'Dynamic content 2',
      customClass: 'alert-color'
    }
  ];
}`;

scrollableTabs =
`// Tab Styles
// -------------------------------
// Make Tabs Responsive and Scrollable
.tabs {
	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;
}

.tabs-title {
	float: none;
	display: inline-block;
}`;

  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  constructor() { }

  selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].active = true;
  }

  disableEnableTab() {
    this.staticTabs.tabs[3].disabled = !this.staticTabs.tabs[3].disabled;
  }

  addNewTab(): void {
    const newTabIndex = this.tabs.length + 1;
    this.tabs.push({
      title: `Dynamic Title ${newTabIndex}`,
      content: `Dynamic content ${newTabIndex}`,
      disabled: false,
      removable: true
    });
  }

  addNewTabScroll(): void {
    const newTabIndex = this.tabsScroll.length + 1;
    this.tabsScroll.push({
      title: `Dynamic Tab ${newTabIndex}`,
      content: `Dynamic content ${newTabIndex}`,
      disabled: false,
      removable: true
    });
  }

  removeTabHandler(tab: any): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    console.log('Remove Tab handler');
  }
}
