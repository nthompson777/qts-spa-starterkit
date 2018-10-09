import { Component } from '@angular/core';
import { faAngleDoubleRight } from '@fortawesome/pro-regular-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  selected: any;
  faAngleDoubleRight = faAngleDoubleRight;

  links: Array<{ path: string, text: string }> = [];

  // Main Nav Links Array
  constructor() {
    this.links.push(
      { path: 'accordion', text: 'Accordion' },
      { path: 'buttons', text: 'Buttons' },
      { path: 'callouts', text: 'Callouts' },
      { path: 'datepicker', text: 'Datepicker' },
      { path: 'dropdowns', text: 'Dropdowns' },
      { path: 'offcanvas', text: 'Off-Canvas' },
      { path: 'orbit', text: 'Orbit' },
      { path: 'pagination', text: 'Pagination' },
      { path: 'progressbar', text: 'Progressbar' },
      { path: 'rating', text: 'Rating' },
      { path: 'reveal', text: 'Reveal' },
      { path: 'sortable', text: 'Sortable' },
      { path: 'tabs', text: 'Tabs' },
      { path: 'timepicker', text: 'Timepicker' },
      { path: 'tooltip', text: 'Tooltip' },
      { path: 'typeahead', text: 'Typeahead' }
    );
  }
}
