import { Component, OnInit, ViewChild  } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { faCheck } from '@fortawesome/pro-regular-svg-icons';
import { faTrain01, faTrainTracks02 } from 'ng-font-qts/font-qts';
import { MessageService } from '../../services/message.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  // --------------------------------------------------
  // Remove All of this Test Stuff Below!!!!!!!!!!!!!

  // Font Awesome 5 Test
  faCheck = faCheck;

  // ng Font QTS Test
  faTrain01 = faTrain01;
  faTrainTracks02 = faTrainTracks02;

  // ngx-foundation Component Test
  dismissible = true;

  // Ag-Grid Test
  @ViewChild('agGrid') agGrid: AgGridNg2;

  columnDefs = [
    {headerName: 'Make', field: 'make', checkboxSelection: true },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
  ];

  rowData: any;

  constructor(private http: HttpClient, private messageService: MessageService) {}

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  confirmModal() {
    this.messageService.confirm(
      'Modal as a Service Dialog Box',
      'Are you sure you want to proceed?',
      ['Confirm', 'Cancel']);
  }
}
