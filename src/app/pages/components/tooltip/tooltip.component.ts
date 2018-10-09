import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faQuestionCircle } from '@fortawesome/pro-solid-svg-icons';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  /* tslint:disable no-unused-css*/
  styles: [
    `
      :host >>> .component-level {
        background-color: indigo;
        color: #fff;
      }
      :host >>> .component-level:before {
        border-top-color: indigo;
      }
    `
  ]
})
export class TooltipComponent {

  faQuestionCircle = faQuestionCircle;

  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';

  html = `<span class="button alert small">Never trust non sanitized HTML!</span>`;

usage =
`import { TooltipModule } from 'ngx-foundation';

@NgModule({
  imports: [TooltipModule.forRoot(),...]
})
export class AppModule(){}`;

basicTemplate =
`<button type="button" class="button primary"
  tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Simple demo
</button>`;

basicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-tooltip-basic',
  templateUrl: './basic.html'
})
export class DemoTooltipBasicComponent {}`;

textOnlyTemplate =
`I'm a
<span class="has-tip" tooltip="Text only tooltip here!">
  text only
</span>
tooltip.`;

textOnlyComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-tooltip-text',
  templateUrl: './text.html'
})
export class DemoTooltipTextComponent {}`;

placementTemplate =
`<button type="button" class="button primary"
    tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    placement="top">
Tooltip on top
</button>

<button type="button" class="button primary"
      tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      placement="right">
Tooltip on right
</button>

<button type="button" class="button primary"
      tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      placement="auto">
Tooltip auto
</button>

<button type="button" class="button primary"
      tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      placement="left">
Tooltip on left
</button>

<button type="button" class="button primary"
      tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      placement="bottom">
Tooltip on bottom
</button>`;

placementComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-tooltip-placement',
  templateUrl: './placement.html'
})
export class DemoTooltipPlacementComponent {}`;

dismissTemplate =
`<button type="button" class="button success"
  tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
  triggers="focus">
  Dismissible tooltip
</button>`;

dismissComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-tooltip-dismiss',
  templateUrl: './dismiss.html'
})
export class DemoTooltipDismissComponent {}`;

dynamicTemplate =
`<button type="button" class="button primary" [tooltip]="content">
  Simple binding
</button>`;

dynamicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-tooltip-dynamic',
  templateUrl: './dynamic.html'
})
export class DemoTooltipDynamicComponent {
  content: string = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
}`;

iconTemplate =
`<fa-icon [icon]="faQuestionCircle" size="lg" tooltip="Icon tooltip here!" class="color"></fa-icon>`;

iconComponent =
`import { Component } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'demo-tooltip-icon',
  templateUrl: './icon.html'
})
export class DemoTooltipIconComponent {
  faQuestionCircle = faQuestionCircle;
}`;

customContentTemplate =
`<ng-template #tolTemplate>Just another: {{content}}</ng-template>
<button type="button" class="button secondary" [tooltip]="tolTemplate">
  TemplateRef binding
</button>`;

customContentComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-tooltip-custom-content',
  templateUrl: './custom-content.html'
})
export class DemoTooltipCustomContentComponent {
  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
}`;

dynamicHtmlTemplate =
`<ng-template #popTemplate>Here we go: <div [innerHtml]="html"></div></ng-template>
<button type="button" class="button primary"
        [tooltip]="popTemplate">
  Show me tooltip with html
</button>`;

dynamicHtmlComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-tooltip-dynamic-html',
  templateUrl: './dynamic-html.html'
})
export class DemoTooltipDynamicHtmlComponent {
  html = \`<span class="btn-block btn-danger well-sm">Never trust non sanitized HTML!!!</span>\`;
}`;

bodyTemplate =
`<div class="grid-x grid-margin-x" style="position: relative; overflow: hidden; padding-top: 10px;">
  <div class="small-12 cell">
    <button type="button" class="button primary"
            tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Clipped - No Container Body
    </button>
    <button type="button" class="button success"
            tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            container="body">
      Tooltip Appended to Body
    </button>
  </div><!-- /cell -->
</div><!-- /grid -->`;

bodyComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-tooltip-container',
  templateUrl: './container.html'
})
export class DemoTooltipContainerComponent {}`;

triggersTemplate =
`<div class="grid-x grid-margin-x">
  <div class="medium-6 cell">
    <p>Desktop</p>
    <button type="button" class="button primary"
            tooltip="I will hide on click"
            triggers="mouseenter:click">
      Hover over me!
    </button>
  </div><!-- /cell -->
  <div class="medium-6 cell">
    <p>Mobile</p>
    <button type="button" class="button secondary"
            tooltip="I will hide on click"
            triggers="click">
      Click on me!
    </button>
  </div><!-- /cell -->
</div><!-- /grid -->`;

triggersComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-tooltip-triggers-custom',
  templateUrl: './triggers-custom.html'
})
export class DemoTooltipTriggersCustomComponent {}`;

manualTemplate =
`<p>
  <span tooltip="Hello there! I was triggered manually"
        triggers="" #pop="bs-tooltip">
    This text has attached tooltip.
  </span>
</p>
<div class="button-group">
  <button type="button" class="button success" (click)="pop.show()">
    Show
  </button>
  <button type="button" class="button warning" (click)="pop.hide()">
    Hide
  </button>
  <button type="button" class="button primary" (click)="pop.toggle()">
    Toggle
  </button>
</div>`;

manualComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-tooltip-triggers-manual',
  templateUrl: './triggers-manual.html'
})
export class DemoTooltipTriggersManualComponent {}`;

compLevelTemplate =
`<button type="button" class="button primary"
  tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
  containerClass="component-level">
  Component Level Styling w/ Custom Class
</button>`;

compLevelComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-tooltip-styling-local',
  templateUrl: './styling-local.html',
  /* tslint:disable no-unused-css*/
  styles: [
    \`
      :host >>> .component-level {
        background-color: indigo;
        color: #fff;
      }
      :host >>> .component-level:before {
        border-top-color: indigo;
      }
    \`
  ]
})
export class DemoTooltipStylingLocalComponent {}`;

delayTemplate =
`<button type="button" class="button primary"
  tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." 
  [delay]="500">
  Tooltip with 0.5sec delay
</button>`;

delayComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-tooltip-delay',
  templateUrl: './delay.html'
})
export class DemoTooltipDelayComponent {}`;

  constructor() { }

}
