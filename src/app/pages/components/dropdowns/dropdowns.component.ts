import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent implements OnInit {

  isDropup = true;

usage =
`import { BsDropdownModule } from 'ngx-foundation';

@NgModule({
  imports: [BsDropdownModule.forRoot(),...]
})
export class AppModule(){}`;

basicTemplate =
`<ul class="dropdown vertical menu" dropdown #dropdown="bs-dropdown">
  <li class="is-dropdown-submenu-parent">
    <button dropdownToggle type="button" class="dropdown button primary" aria-controls="dropdown-button">
      Button Dropdown Menu 
    </button>
    <ul id="dropdown-button" *dropdownMenu class="menu is-dropdown-submenu" role="menu">
      <li role="menuitem"><a href="#">Item 1</a></li>
      <li role="menuitem"><a href="#">Item 2</a>
      </li>
      <li role="menuitem"><a href="#">Item 3a</a></li>
    </ul>
  </li>
</ul>`;

basicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-dropdown-basic',
  templateUrl: './basic.html'
})
export class DemoDropdownBasicComponent {}`;

paneTemplate =
`<ul class="dropdown menu" dropdown #dropdown="bs-dropdown">
  <li class="is-dropdown-submenu-parent">
    <button dropdownToggle type="button" class="button primary" aria-controls="dropdown-button">
      Dropdown Pane
    </button>
    <div *dropdownMenu class="dropdown-pane" role="menu">
      <p>Just some standard text content. Nothing special to see here.</p>
    </div>
  </li>
</ul>`;

paneComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-dropdown-pane',
  templateUrl: './pane.html'
})
export class DemoDropdownPaneComponent {}`;

hoverTemplate =
`<ul class="dropdown menu">
  <li dropdown #dropdownText="bs-dropdown" triggers="mouseover" class="is-dropdown-submenu-parent">
    <a dropdownToggle (click)="false">
      Dropdown Menu On Mouseover
    </a>
    <ul id="dropdown-triggers-manual" *dropdownMenu class="menu is-dropdown-submenu"
        role="menu" aria-labelledby="button-triggers-manual">
      <li role="menuitem"><a href="#">Action</a></li>
      <li role="menuitem"><a href="#">Another action</a>
      </li>
      <li role="menuitem"><a href="#">Something else
        here</a></li>
      <li class="divider dropdown-divider"></li>
    </ul>
  </li>
</ul>`;

hoverComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-hover-basic',
  templateUrl: './hover.html'
})
export class DemoHoverBasicComponent {}`;

manualTemplate =
`<div class="grid-x grid-margin-x">
  <div class="medium-5 large-3 cell">
    <ul class="dropdown vertical menu" dropdown #dropdown="bs-dropdown" [autoClose]="false">
      <li class="is-dropdown-submenu-parent">
        <button dropdownToggle type="button" class="dropdown button primary" aria-controls="dropdown-button">
          Button Dropdown Menu 
        </button>
        <ul id="dropdown-button" *dropdownMenu class="menu is-dropdown-submenu" role="menu">
          <li role="menuitem"><a href="#">Item 1</a></li>
          <li role="menuitem"><a href="#">Item 2</a>
          </li>
          <li role="menuitem"><a href="#">Item 3a</a></li>
        </ul>
      </li>
    </ul>
  </div><!-- /cell -->
  <div class="medium-5 large-3 cell">
    <div class="button-group">
      <button type="button" class="button primary" (click)="dropdown.toggle(true)">Toggle</button>
      <button type="button" class="button secondary" (click)="dropdown.show()">Show</button>
      <button type="button" class="button alert" (click)="dropdown.hide()">Hide</button>
    </div><!-- /button-group -->
  </div><!-- /cell -->
</div><!-- /grid -->`;

manualComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-dropdown-triggers-manual',
  templateUrl: './triggers-manual.html'
})
export class DemoDropdownTriggersManualComponent {
}`;

dropupTemplate =
`<ul class="dropdown vertical menu" dropdown [dropup]="isDropup">
  <li class="is-dropdown-submenu-parent">
    <button dropdownToggle type="button" class="dropup button primary" aria-controls="dropdown-button">
      Button DropUp Menu 
    </button>
    <ul id="dropdown-button" *dropdownMenu class="menu is-dropdown-submenu has-position-top" role="menu">
      <li role="menuitem"><a href="#">Item 1</a></li>
      <li role="menuitem"><a href="#">Item 2</a>
      </li>
      <li role="menuitem"><a href="#">Item 3a</a></li>
    </ul>
  </li>
</ul>`;

dropupComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-dropdown-dropup',
  templateUrl: './dropup.html'
})
export class DemoDropdownDropupComponent {
  isDropup = true;
}`;

  constructor() { }

  ngOnInit() {
  }

}
