import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-foundation/modal';
import { BsModalRef } from 'ngx-foundation/modal/bs-modal-ref.service';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-reveal',
  templateUrl: './reveal.component.html',
  styleUrls: ['./reveal.component.scss']
})
export class RevealComponent {

  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  bsModalRef: BsModalRef;
  message: string;

  config = {
    backdrop: true,
    ignoreBackdropClick: false
  };

usage =
`import { ModalModule } from 'ngx-foundation';

@NgModule({
  imports: [ModalModule.forRoot(),...]
})
export class AppModule(){}`;

basicTemplate =
`<ng-template #template>
  <h4>Modal</h4>
  <hr>
  <p>Your couch. It is mine.</p>
  <p>I'm a paragraph that lives inside of a modal.</p>
  <button class="close-button" (click)="modalRef.hide()" aria-label="Close modal" type="button">
    <span aria-hidden="true">&times;</span>
  </button>
</ng-template>`;

basicComponent =
`import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-foundation/modal';
import { BsModalRef } from 'ngx-foundation/modal/bs-modal-ref.service';

@Component({
  selector: 'demo-modal-service-static',
  templateUrl: './service-template.html'
})
export class DemoModalServiceStaticComponent {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'tiny'});
  }
`;

serviceTemplate =
`<button type="button" class="button primary" (click)="confirmModal()">Create Modal as a Service</button>`;

serviceStep1Component =
`<!--
// Create a new component that will hold the main structure of your modal: ng g component dialog-body
// Open up your newly created HTML component file: dialog-body.component.html and paste code below:
// Change your modal layout (below) however you choose...
// Be sure to keep in the following interpolation (double curly braces) attributes
// to display the component properties of your modal: {{title}}, {{message}}, {{options}} or {{option}} if looping
-->

<h4>{{title}}</h4>
<button class="close-button" (click)="closeModal()" aria-label="Close modal" type="button">
  <span aria-hidden="true">&times;</span>
</button>
<hr>
<p>{{message}}</p>

<div *ngIf="options.length">
  <div class="button-group">
    <button type="button" class="button secondary" (click)="closeModal()">{{options[0]}}</button>
    <button type="button" class="button primary" (click)="closeModal()">{{options[1]}}</button>
  </div>
</div>

<!-- Option to Loop
<div *ngIf="options.length">
  <div class="button-group">
    <button *ngFor="let option of options" type="button" class="button primary" (click)="closeModal()">{{option}}</button>
  </div>
</div> -->
`;

serviceStep2Component =
`// Open up dialog-body.component.ts and paste the following:

import { Component, Output, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-foundation/modal';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent {
  title: string;
  message: string;
  options: string;

  constructor(public bsModalRef: BsModalRef) { }

  closeModal() {
    this.bsModalRef.hide();
  }
}`;

serviceStep3Component =
`// Create your service in /services: ng g service message
// Open up your newly created service file: message.service.ts and paste code below:
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-foundation/modal';

import { DialogBodyComponent } from '../components/dialog-body/dialog-body.component';

@Injectable()
export class MessageService {
  bsModalRef: BsModalRef;

  constructor(
    private bsModalService: BsModalService,
  ) { }

  confirm(title: string, message: string, options: string[]): Observable<string> {
    const initialState = {
      title: title,
      message: message,
      options: options,
    };
    this.bsModalRef = this.bsModalService.show(DialogBodyComponent, { initialState });

    return new Observable<string>(this.getConfirmSubscriber());
  }

  private getConfirmSubscriber() {
    return (observer) => {
      const subscription = this.bsModalService.onHidden.subscribe((reason: string) => {
        observer.next(this.bsModalRef.content.answer);
        observer.complete();
      });

      return {
        unsubscribe() {
          subscription.unsubscribe();
        }
      };
    };
  }
}`;

serviceStep4Component =
`// Add the following to your [filenameHere].component.ts file and be sure to adjust the file path to your service

import { Component, TemplateRef } from '@angular/core';
import { MessageService } from '../../../services/message.service'; // Adjust this path to your service

@Component({
  selector: 'app-[filenameHere]',
  templateUrl: './[filenameHere].component.html',
  styleUrls: ['./[filenameHere].component.scss']
})
export class RevealComponent {

  constructor(private messageService: MessageService) {}

  confirmModal() {
    this.messageService.confirm(
      'Modal as a Service Dialog Box',
      'Are you sure you want to proceed?',
      ['Yes', 'No']);
  }
}`;

serviceStep5Component =
`// Open up your app.module.ts file and add the entryComponents array below the 'bootstrap' array:

bootstrap: [AppComponent,...],
entryComponents: [
  DialogBodyComponent,
]`;

nestedTemplate =
`<button type="button" class="button primary" (click)="openModal(modal)">Open First Modal</button>
<div class="callout">
  <p>Modal #1 Yes/No Button Confirmation:</p>
  <p>{{message}}</p>
</div>
<ng-template #modal>
  <h4>This is the First Modal</h4>
  <button class="close-button" (click)="modalRef.hide()" aria-label="Close modal" type="button">
    <span aria-hidden="true">&times;</span>
  </button>
  <hr>
  <p>Yeah, first modal paragraph here.</p>
  <div class="btn-cont">
    <button type="button" class="button tertiary" (click)="openModal2(modalNested)">Open Second Modal</button>
  </div>
  <div class="button-group">
    <button type="button" class="button secondary" (click)="confirm()" >Yes</button>
    <button type="button" class="button primary" (click)="decline()" >No</button>  
  </div>
</ng-template>

<!-- Nested Reveal (Modal) -->
<ng-template #modalNested>
  <h4>Second Nested Modal</h4>
  <hr>
  <button type="button" class="close-button" aria-label="Close" (click)="modalRef2.hide()">
    <span aria-hidden="true">&times;</span>
  </button>
  <p>This is a nested modal.</p>
  <div class="button-group">
    <button *ngIf="modalRef" type="button" class="button alert" (click)="closeFirstModal()">Close First Modal</button>
  </div>
</ng-template>`;

nestedComponent =
`import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-foundation/modal';
import { BsModalRef } from 'ngx-foundation/modal/bs-modal-ref.service';

@Component({
  selector: 'demo-modal-service-confirm-window',
  templateUrl: './service-confirm-window.html'
})
export class DemoModalServiceConfirmWindowComponent {
  modalRef: BsModalRef;
  message: string;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'tiny'});
  }

  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: 'small' });
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
  closeFirstModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }
}`;

sizingTemplate =
`<div class="btn-cont">
  <button type="button" class="button primary" (click)="openModalTiny(diffSizes)">Tiny Modal</button>
  <button type="button" class="button primary" (click)="openModalSmall(diffSizes)">Small Modal</button>
  <button type="button" class="button primary" (click)="openModalLarge(diffSizes)">Large Modal</button>
  <button type="button" class="button primary" (click)="openModalFull(diffSizes)">Full Modal</button>
</div>

<ng-template #diffSizes>
  <h4>Modals with Various Sizes</h4>
  <button class="close-button" (click)="modalRef.hide()" aria-label="Close modal" type="button">
    <span aria-hidden="true">&times;</span>
  </button>
  <hr>
  <p>Modals with various sizes.</p>
  <p>I'm a paragraph that lives inside of a modal.</p>
  <button class="button small primary float-right" (click)="modalRef.hide()" aria-label="Close modal" type="button">OK</button>
</ng-template>`;

sizingComponent =
`import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-foundation/modal';
import { BsModalRef } from 'ngx-foundation/modal/bs-modal-ref.service';

@Component({
  selector: 'app-modal-sizes-static',
  templateUrl: './modal-sizes-static.html'
})
export class ModalSizesStaticComponent {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalTiny(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'tiny'});
  }

  openModalSmall(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'small' });
  }

  openModalLarge(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'large'});
  }

  openModalFull(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'full'});
  }
}`;

confirmWindowTemplate =
`<button type="button" class="button primary" (click)="openModal(confirmWindow)">Open modal</button>
<br>
<div class="callout">{{message}}</div>
<ng-template #confirmWindow>
  <p>Do you want to confirm?</p>
  <div class="button-group">
    <button type="button" class="button secondary" (click)="confirm()" >Yes</button>
    <button type="button" class="button primary" (click)="decline()" >No</button>
  </div>
</ng-template>`;

confirmWindowComponent =
`import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-foundation/modal';
import { BsModalRef } from 'ngx-foundation/modal/bs-modal-ref.service';

@Component({
  selector: 'demo-modal-service-confirm-window',
  templateUrl: './service-confirm-window.html'
})
export class DemoModalServiceConfirmWindowComponent {
  modalRef: BsModalRef;
  message: string;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'tiny'});
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
}`;

  constructor(private modalService: BsModalService, private messageService: MessageService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'tiny'});
  }

  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: 'small' });
  }

  openModalTiny(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'tiny'});
  }

  openModalSmall(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'small' });
  }

  openModalLarge(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'large'});
  }

  openModalFull(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'full'});
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  closeFirstModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }

  confirmModal() {
    this.messageService.confirm(
      'Modal as a Service Dialog Box',
      'Are you sure you want to proceed?',
      ['Yes', 'No']);
  }
}
