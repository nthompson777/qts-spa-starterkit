import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-orbit',
  templateUrl: './orbit.component.html',
  styleUrls: ['./orbit.component.scss']
})
export class OrbitComponent {
  myInterval = 3000;
  activeSlideIndex = 0;

  slides: any = [
    {
      src: 'https://baconmockup.com/400/200',
      alt: `Bacon`,
      caption: `Slide Bacon`
    },
    {
      src: 'https://baconmockup.com/401/200',
      alt: `Bacon`,
      caption: `Slide More Bacon`
    },
    {
      src: 'https://baconmockup.com/402/200',
      alt: `Bacon`,
      caption: `Slide Even More Bacon`
    }
  ];

  usage =
`import { CarouselModule } from 'ngx-foundation';

@NgModule({
  imports: [CarouselModule.forRoot(),...]
})
export class AppModule(){}`;

basicTemplate =
`<div class="grid-x grid-margin-x">
  <div class="medium-9 large-8 cell">
    <carousel [showIndicators]="true">
      <slide>
        <figure class="orbit-figure">
          <img class="orbit-image" src="https://baconmockup.com/400/170" alt="First slide"> 
        </figure>
      </slide>
      <slide>
        <figure class="orbit-figure">
          <img class="orbit-image" src="https://baconmockup.com/401/170" alt="Second slide"> 
        </figure>
      </slide>
      <slide>
        <figure class="orbit-figure">
          <img class="orbit-image" src="https://baconmockup.com/402/170" alt="Third slide"> 
        </figure>
      </slide>
    </carousel>
  </div><!-- /cell -->
</div><!-- /grid -->`;

basicComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-carousel-basic',
  templateUrl: './basic.html'
})
export class DemoCarouseBasicComponent {}`;

dynamicTemplate =
`<div class="grid-x grid-margin-x">
  <div class="medium-9 large-8 cell">
    <carousel [showIndicators]="true">
      <slide *ngFor="let slide of slides" let index="index">
        <figure class="orbit-figure"> 
          <img class="orbit-image" [src]="slide.src" [alt]="slide.alt">
          <figcaption class="orbit-caption">
            <span [innerHtml]="slide.caption"></span>
          </figcaption>
        </figure>
      </slide>
    </carousel>
  </div><!-- /cell -->
</div><!-- /grid -->`;

dynamicComponent =
`import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-orbit',
  templateUrl: './orbit.component.html',
  styleUrls: ['./orbit.component.scss']
})

export class OrbitComponent {
  myInterval = 3000;
  activeSlideIndex = 0;

  slides: any = [
    {
      src: 'https://baconmockup.com/400/200',
      alt: \`Yummy Bacon\`,
      caption: \`Slide Bacon\`
    },
    {
      src: 'https://baconmockup.com/401/200',
      alt: \`Tasty Bacon\`,
      caption: \`Slide More Bacon\`
    },
    {
      src: 'https://baconmockup.com/402/200',
      alt: \`Scrumptous Bacon\`,
      caption: \`Slide Even More Bacon\`
    }
  ];
  constructor( sanitizer: DomSanitizer ) {

    this.slides = this.slides.map((slide: any) => ({
      src: slide.src,
      alt: slide.alt,
      caption: sanitizer.sanitize(SecurityContext.HTML, slide.caption)
    }));
  }
}`;

configDefaults =
`import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-foundation/carousel';

@Component({
  selector: 'demo-carousel-config',
  templateUrl: './config.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class DemoCarouselConfigComponent {}`;

customTemplate =
`<div class="grid-x grid-margin-x">
  <div class="medium-9 large-8 cell">
    <carousel [showIndicators]="true" class="custom-content">
      <slide>
        <div class="custom-slide-1">
          <h2>First custom content</h2>
          <div class="lead">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      </slide>
      <slide>
        <div class="custom-slide-2">
          <h2>Second custom content</h2>
          <div class="lead">
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      </slide>
      <slide>
        <div class="custom-slide-3">
          <h2>Third custom content</h2>
          <div class="lead">
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      </slide>
    </carousel>
  </div><!-- /cell -->
</div><!-- /grid -->`;

customSCSS =
`// On the Component's SCSS file:
.custom-content {

  $colors-list: dodgerblue, rebeccapurple, darkgoldenrod;

  @each $current-color in $colors-list {
    $i: index($colors-list, $current-color);

    .custom-slide-#{$i} {
      background-color: $current-color;
      text-align: center;
      color: white;
      padding: 2rem 4rem;

      h2, h3 {
        color: white;
      }
    }
  }
}`;

customComponent =
`import { Component } from '@angular/core';

@Component({
  selector: 'demo-carousel-custom-content',
  templateUrl: './custom-content.html'
})
export class DemoCarouselCustomContentComponent {}`;

  constructor( sanitizer: DomSanitizer ) {

    this.slides = this.slides.map((slide: any) => ({
      src: slide.src,
      alt: slide.alt,
      caption: sanitizer.sanitize(SecurityContext.HTML, slide.caption)
    }));
  }
}
