import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent implements OnInit {

  isOffcanvas = true;

usage =
`import { OffcanvasModule } from 'ngx-foundation';

@NgModule({
  imports: [OffcanvasModule.forRoot(),...]
})
export class AppModule(){}`;

motionui =
`@import '~motion-ui/src/motion-ui';
  @include motion-ui-transitions;
  @include motion-ui-animations;`;

offcanvasTemplate =
`<div class="grid-x grid-margin-x">
  <div class="medium-6 large-3 cell">
    <button type="button"
      class="button primary"
      [attr.aria-expanded]="!isOffcanvas"
      aria-controls="offCanvasMenuLeft"
      (click)="offcanvasLeft.show()">
      Toggle Off Canvas Left
    </button>
  </div>
  <div class="medium-6 large-3 cell">
    <button type="button"
      class="button secondary"
      [attr.aria-expanded]="!isOffcanvas"
      aria-controls="offCanvasMenuRight"
      (click)="offcanvasRight.show()">
      Toggle Off Canvas Right
    </button>
  </div>
  <div class="medium-6 large-3 cell">
    <button type="button"
      class="button primary"
      [attr.aria-expanded]="!isOffcanvas"
      aria-controls="offCanvasMenuTop"
      (click)="offcanvasTop.show()">
      Toggle Off Canvas Top
    </button>
  </div>
  <div class="medium-6 large-3 cell">
    <button type="button"
      class="button secondary"
      [attr.aria-expanded]="!isOffcanvas"
      aria-controls="offCanvasMenuBottom"
      (click)="offcanvasBottom.show()">
      Toggle Off Canvas Bottom
    </button>
  </div>
  </div><!-- /grid -->

<!-- Position Left -->
<div [offcanvas]="isOffcanvas"
  class="off-canvas position-left"
  id="offCanvasMenuLeft"
  aria-hidden="true"
  #offcanvasLeft="bs-offcanvas">
  <h4>Off Canvas Left</h4>
  <ul class="menu vertical">
    <li routerLinkActive="active"
    [routerLinkActiveOptions]="{ exact: true }">
      <a routerLink="/components/callouts" (click)="offcanvasLeft.hide()">Callouts</a>
    </li>
  </ul>
  <button class="close-button" aria-label="Close Menu" aria-controls="offCanvasMenu" type="button" (click)="offcanvasLeft.hide()">
    <span aria-hidden="true">×</span>
  </button>
</div>

<!-- Position Right -->
<div [offcanvas]="isOffcanvas"
  class="off-canvas position-right"
  id="offCanvasMenuRight"
  aria-hidden="true"
  #offcanvasRight="bs-offcanvas">
  <h4>Off Canvas Right</h4>
  <ul class="menu vertical">
    <li routerLinkActive="active"
    [routerLinkActiveOptions]="{ exact: true }">
      <a routerLink="/components/callouts" (click)="offcanvasRight.hide()">Callouts</a>
    </li>
  </ul>
  <button class="close-button" aria-label="Close Menu" aria-controls="offCanvasMenu" type="button" (click)="offcanvasRight.hide()">
    <span aria-hidden="true">×</span>
  </button>
</div>

<!-- Position Top -->
<div [offcanvas]="isOffcanvas"
  class="off-canvas position-top"
  id="offCanvasMenuTop"
  aria-hidden="true"
  #offcanvasTop="bs-offcanvas">
  <h4>Off Canvas Top</h4>
  <ul class="menu vertical">
    <li routerLinkActive="active"
    [routerLinkActiveOptions]="{ exact: true }">
      <a routerLink="/components/callouts" (click)="offcanvasTop.hide()">Callouts</a>
    </li>
  </ul>
  <button class="close-button" aria-label="Close Menu" aria-controls="offCanvasMenu" type="button" (click)="offcanvasTop.hide()">
    <span aria-hidden="true">×</span>
  </button>
</div>

<!-- Position Bottom -->
<div [offcanvas]="isOffcanvas"
  class="off-canvas position-bottom"
  id="offCanvasMenuBottom"
  aria-hidden="true"
  #offcanvasBottom="bs-offcanvas">
  <h4>Off Canvas Bottom</h4>
  <ul class="menu vertical">
    <li routerLinkActive="active"
    [routerLinkActiveOptions]="{ exact: true }">
      <a routerLink="/components/callouts" (click)="offcanvasBottom.hide()">Callouts</a>
    </li>
  </ul>
  <button class="close-button" aria-label="Close Menu" aria-controls="offCanvasMenu" type="button" (click)="offcanvasBottom.hide()">
    <span aria-hidden="true">×</span>
  </button>
</div>`;

offcanvasComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'offcanvas-demo',
  templateUrl: './offcanvas.html'
})
export class OffcanvasDemoComponent {
  isOffcanvas = true;
}`;

wrapper =
`<div class="off-canvas-wrapper">
  <div [offcanvas]="isOffcanvas"
    class="off-canvas position-left"
    id="UniqueIdHere"
    aria-hidden="true"
    #offcanvasUniqueNameHere="bs-offcanvas">
    <!-- Your menu or Off-Canvas content goes here -->
  </div>
  <div class="off-canvas-content">
    <!-- Your page content lives here -->
  </div>
</div>`;

  constructor() { }

  ngOnInit() {
  }

}
