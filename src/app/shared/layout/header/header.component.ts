import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  appTitle = 'App Name Here';
  list: any;
  selected: any;
  isOffcanvas = true;
  @Input() public hasSideNav: boolean;

  links: Array<{ path: string, text: string }> = [];

  // Main Nav Links Array
  constructor() {
    this.links.push(
      { path: '/', text: 'Link 1' },
      { path: '/demo', text: 'Link 2' },
    );
  }
  select(item) {
    this.selected = item;
  }

  isActive(item) {
    return this.selected === item;
  }
}
