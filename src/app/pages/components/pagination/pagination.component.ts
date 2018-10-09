import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent implements OnInit {

  bigTotalItems = 200;
  maxSize = 5;
  showBoundaryLinks = true;
  rotate = true;
  showDirectionLinks = true;
  disabled = false;
  totalItems = 90;
  pagesCount = 4;
  page: number;
  smallnumPages = 0;
  currentPage = 4;
  currentPageNumber = 5;
  pagerCurrentPage = 3;

usage =
`import { PaginationModule } from 'ngx-foundation';

@NgModule({
  imports: [PaginationModule.forRoot(),...]
})
export class AppModule(){}`;

basicTemplate =
`<pagination [directionLinks]="showDirectionLinks" [totalItems]="40"></pagination>`;

basicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-pagination-basic',
  templateUrl: './basic.html'
})
export class DemoPaginationBasicComponent {}`;

pagechangeTemplate =
`<div class="grid-x grid-margin-x">
  <div class="small-12 cell">
    <h4>Page Changed Event</h4><br>
    <pagination [totalItems]="70" (pageChanged)="pageChanged($event)"></pagination>
    <div class="callout">
      Page changed to: {{page}}
    </div>
  </div>
</div>`;

pagechangeComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-pagination-page-changed-event',
  templateUrl: './page-changed-event.html'
})
export class DemoPaginationPageChangedComponent {
  page: number;

  pageChanged(event: any): void {
    this.page = event.page;
  }
}`;

pagescountTemplate =
`<pagination [totalItems]="88" [(ngModel)]="currentPage" (numPages)="smallnumPages = $event"></pagination>
<div class="callout">The selected page no: {{currentPage}}/{{smallnumPages}}</div>`;

pagescountComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-pagination-pages-count-changed',
  templateUrl: './pages-count-changed.html'
})
export class DemoPaginationPagesCountChangedComponent {
  currentPage = 4;
  smallnumPages = 0;
}`;

switchingTemplate =
`<div class="grid-x grid-margin-x">
  <div class="small-12 cell">
    <pagination [totalItems]="totalItems" [(ngModel)]="currentPageNumber"></pagination>
  </div>
</div>
<div class="grid-x grid-margin-x">
  <div class="small-12 cell">
    <button type="button" class="button primary" (click)="setPage(3)">Set current page to: 3</button>
  </div>
</div>`;

switchingComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-pagination-manual-switching',
  templateUrl: './manual-switching.html'
})
export class DemoPaginationManualSwitchingComponent {
  totalItems = 64;
  currentPageNumber = 5;

  setPage(pageNo: number): void {
    this.currentPageNumber = pageNo;
  }
}`;

boundaryTemplate =
`<pagination [boundaryLinks]="showBoundaryLinks"
  [totalItems]="bigTotalItems"
  [(ngModel)]="bigCurrentPage"
  [maxSize]="maxSize">
</pagination>
<button type="button"
  class="button primary"
  (click)="showBoundaryLinks = !showBoundaryLinks">
  Hide/show boundary links
</button>`;

boundaryComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-pagination-rotate',
  templateUrl: './rotate.html'
})
export class DemoPaginationRotateComponent {
  showBoundaryLinks = true;
  maxSize = 5;
}`;

centeringTemplate =
`<pagination [rotate]="rotate" [totalItems]="100" [maxSize]="maxSize"></pagination>
<button type="button"
  class="button secondary"
  (click)="rotate = !rotate">
  Toggle centering current page link
</button>`;

centeringComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-pagination-rotate',
  templateUrl: './rotate.html'
})
export class DemoPaginationRotateComponent {
  rotate = true;
  maxSize = 5;
}`;

disabledTemplate =
`<pagination [disabled]="disabled" [totalItems]="66"></pagination>
<button type="button"
  class="button primary"
  (click)="toggleState()">
  Toggle state
</button>`;

disabledComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-pagination-disabled',
  templateUrl: './disabled.html'
})
export class DemoPaginationDisabledComponent {
  disabled = false;

  toggleState(): void {
    this.disabled = !this.disabled;
  }
}`;

pagerTemplate =
`<div class="grid-x grid-margin-x">
  <div class="small-12 cell">
    <pagination
      [directionLinks]="false"
      [totalItems]="totalItems"
      [(ngModel)]="pagerCurrentPage"
      (numPages)="smallnumPages = $event">
    </pagination>
  </div>
</div>

<div class="grid-x grid-margin-x">
  <div class="small-12 cell">
    <pager
      [totalItems]="totalItems"
      [(ngModel)]="pagerCurrentPage"
      (pageChanged)="pagerPageChanged($event)"
      [itemsPerPage]="10">
    </pager>
  </div>
</div>`;

pagerComponent =
`import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-pagination-pager',
  templateUrl: './pager.html',
  encapsulation: ViewEncapsulation.None
})
export class DemoPaginationPagerComponent {
  totalItems: number = 64;
  currentPage: number = 4;
  smallnumPages: number = 0;

  pagerPageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
}`;

  pageChanged(event: any): void {
    this.page = event.page;
  }

  setPage(pageNo: number): void {
    this.currentPageNumber = pageNo;
  }

  toggleState(): void {
    this.disabled = !this.disabled;
  }

  pagerPageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  constructor() { }

  ngOnInit() {
  }

}
