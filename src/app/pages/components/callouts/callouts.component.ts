import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-callouts',
  templateUrl: './callouts.component.html',
  styleUrls: ['./callouts.component.scss']
})
export class CalloutsComponent {
  dismissible = true;
  alerts: any = [
    {
      type: 'primary',
      msg: `<strong>This is a primary callout.</strong> This alert needs your attention, but it's not super important.`
    },
    {
      type: 'success',
      msg: `<strong>This is a success callout.</strong> You successfully read this message.`
    },
    {
      type: 'alert',
      msg: `<strong>This is an alert callout.</strong> Bad. Ya blew it. Great job!`
    }
  ];

  usage =
`import { AlertModule } from 'ngx-foundation';

@NgModule({
  imports: [AlertModule.forRoot(),...]
})
export class AppModule(){}`;

  basicTemplate =
`<alert type="primary">
  <strong>This is a primary callout.</strong> This alert needs your attention, but it's not super important.
</alert>
<alert type="success">
  <strong>This is a success callout.</strong> You successfully read this message.
</alert>
<alert type="warning">
  <strong>This is a warning callout.</strong> This is only a warning so take heed.
</alert>
<alert type="alert">
  <strong>This is an alert callout.</strong> Bad. Ya blew it. Great job! 
</alert>`;

  basicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-alert-basic',
  templateUrl: './basic.html'
})
export class DemoAlertBasicComponent {}`;

  dissmissTemplate =
`<div *ngFor="let alert of alerts">
  <alert [type]="alert.type" [dismissible]="dismissible" (onClosed)="onClosed(alert)"><span [innerHtml]="alert.msg"></span></alert>
</div>`;

  dissmissComponent =
`import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'demo-alert-dynamic-html',
  templateUrl: './dynamic-html.html'
})
export class DemoAlertDynamicHtmlComponent {
  dismissible = true;
  alerts: any = [
    {
      type: 'success',
      msg: \`<strong>Well done!</strong> You successfully read this important alert message.\`
    },
    {
      type: 'info',
      msg: \`<strong>Heads up!</strong> This alert needs your attention, but it's not super important.\`
    },
    {
      type: 'danger',
      msg: \`<strong>Warning!</strong> Better check yourself, you're not looking too good.\`
    }
  ];

  constructor(sanitizer: DomSanitizer) {
    this.alerts = this.alerts.map((alert: any) => ({
      type: alert.type,
      msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)
    }));
  }
}`;

  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  constructor(sanitizer: DomSanitizer) {
    this.alerts = this.alerts.map((alert: any) => ({
      type: alert.type,
      msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)
    }));
  }
}
