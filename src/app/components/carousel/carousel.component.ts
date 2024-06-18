import {
  Component,
  Input,
  OnDestroy,
  TemplateRef,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
  KeyValueDiffer,
  KeyValueDiffers
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export enum Direction {
  Next,
  Prev
}

export enum Animation {
  Fade = 'fade',
  Slide = 'slide'
}

export interface ActiveSlides {
  previous: number;
  current: number;
  next: number;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideState', [
      state('current', style({
        transform: 'translateX(0%)',
        zIndex: 1
      })),
      state('next', style({
        transform: 'translateX(100%)',
        zIndex: 1
      })),
      state('previous', style({
        transform: 'translateX(-100%)',
        zIndex: 1
      })),
      transition('current => previous', animate('400ms ease-out')),
      transition('next => current', animate('400ms ease-out')),
    ])
  ]
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() slides: { url: string }[] = [];
  @Input() isNavigationVisible = false;
  @Input() isThumbnailsVisible = false;
  @Input() animation: Animation = Animation.Fade;
  @Input() autoPlayDuration = 0;
  @Input() slideTemplateRef: TemplateRef<any> | null = null; // добавлено значение по умолчанию
  @Input() thumbnailTemplateRef: TemplateRef<any> | null = null; // добавлено значение по умолчанию
  currentInterval: any = null; // явное указание типа и инициализация
  differ: KeyValueDiffer<ActiveSlides, any> | null = null; // добавлено значение по умолчанию

  private _direction: Direction = Direction.Next;
  get direction() {
    return this._direction;
  }
  set direction(direction: Direction) {
    this._direction = direction;
  }

  private _activeSlides: ActiveSlides = { previous: 0, current: 0, next: 0 }; // добавлено значение по умолчанию
  get activeSlides() {
    return this._activeSlides;
  }
  set activeSlides(activeSlides: ActiveSlides) {
    this._activeSlides = activeSlides;
  }

  private _visibleSlides: { url: string } [] = [];
  get visibleSlides() {
    return this._visibleSlides;
  }
  set visibleSlides(visibleSlides: { url: string } []) {
    this._visibleSlides = visibleSlides;
  }

  constructor(private cd: ChangeDetectorRef, private differs: KeyValueDiffers) { }

  ngOnInit(): void {
    if (this.slides.length) {
      this.activeSlides = this.getPreviousCurrentNextIndexes(0);
      this.visibleSlides = this.getVisibleSlides(0);
      this.differ = this.differs.find(this.activeSlides).create();
      if (this.slides.length > 1 && this.autoPlayDuration > 0) {
        this.startTimer();
      }
    }
  }

  ngOnDestroy(): void {
    this.resetTimer();
    this.cd.detach();
  }

  select(index: number): void {
    this.resetTimer();
    const oldIndex = this.activeSlides.current; // Сохранение текущего индекса
    this.activeSlides = this.getPreviousCurrentNextIndexes(index);
    this.visibleSlides = this.getVisibleSlides(index);
    this.direction = this.getDirection(oldIndex, index);
    this.startTimer();

    if (this.differ?.diff(this.activeSlides)) { // Использование опциональной цепочки
      this.cd.detectChanges();
    }
  }

  getDirection(oldIndex: number, newIndex: number): Direction {
    const images = this.slides;

    if (oldIndex === images.length - 1 && newIndex === 0) {
      return Direction.Next;
    } else if (oldIndex === 0 && newIndex === images.length - 1) {
      return Direction.Prev;
    }

    return oldIndex < newIndex ? Direction.Next : Direction.Prev;
  }

  getPreviousCurrentNextIndexes(index: number): ActiveSlides {
    const images = this.slides;

    return {
      previous: (index === 0 ? images.length - 1 : index - 1) % images.length,
      current: index % images.length,
      next: (index === images.length - 1 ? 0 : index + 1) % images.length
    };
  }

  getVisibleSlides(startIndex: number): { url: string } [] {
    const visibleSlides = [];
    const visibleCount = 5;
    for(let i=0; i < visibleCount; i++) {
      const index = (startIndex + i) % this.slides.length;
      visibleSlides.push(this.slides[index]);
    }
    return visibleSlides;
  }

  getAnimationSlideState(index: number) {
    const data = this.activeSlides;

    return (index === data.current)
    ? 'current'
    : (index === data.previous)
    ? 'previous'
    : 'next';
  }

  nextSlide(): void {
    const index = this.activeSlides.current + 1;
    this.select(index >= this.slides.length ? 0 : index);
  }

  prevSlide(): void {
    const index = this.activeSlides.current - 1;
    this.select(index < 0 ? this.slides.length - 1 : index);
  }

  resetTimer(): void {
    if (this.currentInterval) {
      clearInterval(this.currentInterval);
    }
  }


  startTimer(): void {
    this.resetTimer();

    if (this.autoPlayDuration > 0) {
      this.currentInterval = setInterval(() => {
        this.direction = Direction.Next;
        this.select(this.activeSlides.next);
      },
       this.autoPlayDuration);
    }
  }


  animationDone(event: any) { }
  animationStarted(event: any) { }
}


// import {
//   Component,
//   Input,
//   OnDestroy,
//   TemplateRef,
//   ChangeDetectionStrategy,
//   OnInit,
//   ChangeDetectorRef,
//   KeyValueDiffer,
//   KeyValueDiffers
// } from '@angular/core';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition
// } from '@angular/animations';

// export enum Direction {
//   Next,
//   Prev
// }

// export enum Animation {
//   Fade = 'fade',
//   Slide = 'slide'
// }

// export interface ActiveSlides {
//   previous: number;
//   current: number;
//   next: number;
// }

// @Component({
//   selector: 'app-carousel',
//   templateUrl: `./carousel.component.html`,
//   styleUrls: ['./carousel.component.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   animations: [
//     trigger('slideState', [
//       state('current', style({
//         transform: 'translateX(0%)',
//         zIndex: 1
//       })),
//       state('next', style({
//         transform: 'translateX(100%)',
//         zIndex: 1
//       })),
//       state('previous', style({
//         transform: 'translateX(-100%)',
//         zIndex: 1
//       })),
//       transition('current => previous', animate('400ms ease-out')),
//       transition('next => current', animate('400ms ease-out')),
//     ])
//   ]
// })
// export class CarouselComponent implements OnInit, OnDestroy {
//   @Input() slides: {url: string}[] = [];
//   @Input() isNavigationVisible = false;
//   @Input() isThumbnailsVisible = false;
//   @Input() animation: Animation = Animation.Fade;
//   @Input() autoPlayDuration = 0;
//   @Input() slideTemplateRef: TemplateRef<any> | null = null;
//   @Input() thumbnailTemplateRef: TemplateRef<any> | null = null;
//   currentInterval: any;
//   differ: KeyValueDiffer<ActiveSlides, any> | null = null;

//   private _direction: Direction = Direction.Next;
//   get direction() {
//     return this._direction;
//   }
//   set direction(direction: Direction) {
//     this._direction = direction;
//   }

//   private _activeSlides: ActiveSlides | null = null;
//   get activeSlides() {
//     return this._activeSlides;
//   }
//   set activeSlides(activeSlides: ActiveSlides | null) {
//     this._activeSlides = activeSlides;
//   }

//   constructor(private cd: ChangeDetectorRef, private differs: KeyValueDiffers) { }

//   ngOnInit(): void {
//     if (this.slides.length > 0) {
//       this.activeSlides = this.getPreviousCurrentNextIndexes(0);
//       this.differ = this.differs.find(this.activeSlides).create();
//       if (this.slides.length > 1 && this.autoPlayDuration > 0) {
//         this.startTimer();
//       }
//     }
//   }

//   ngOnDestroy(): void {
//     this.resetTimer();
//     this.cd.detach();
//   }

//   select(index: number): void {
//     this.resetTimer();
//     this.activeSlides = this.getPreviousCurrentNextIndexes(index);
//     this.direction = this.getDirection(this.activeSlides.current, index);
//     this.startTimer();

//     if (this.differ && this.differ.diff(this.activeSlides)) {
//       this.cd.detectChanges();
//     }
//   }

//   getDirection(oldIndex: number, newIndex: number): Direction {
//     const images = this.slides;

//     if (oldIndex === images.length - 1 && newIndex === 0) {
//       return Direction.Next;
//     } else if (oldIndex === 0 && newIndex === images.length - 1) {
//       return Direction.Prev;
//     }

//     return oldIndex < newIndex ? Direction.Next : Direction.Prev;
//   }

//   getPreviousCurrentNextIndexes(index: number): ActiveSlides {
//     const images = this.slides;

//     return {
//       previous: (index === 0 ? images.length - 1 : index - 1) % images.length,
//       current: index % images.length,
//       next: (index === images.length - 1 ? 0 : index + 1) % images.length
//     };
//   }

//   getAnimationSlideState(index: number) {
//     return index === this.activeSlides!.current ? 'current' : index === this.activeSlides!.next ? 'next' : index === this.activeSlides!.previous ? 'previous' : ''
//   }

//   startTimer(): void {
//     this.resetTimer();

//     if (this.autoPlayDuration > 0) {
//       this.currentInterval = setInterval(() => this.select(this.activeSlides!.next), this.autoPlayDuration);
//     }
//   }

//   resetTimer(): void {
//     if (this.currentInterval) {
//       clearInterval(this.currentInterval);
//     }
//   }

//   animationDone(event: any) {
//     // Handle animation done
//   }

//   animationStarted(event: any) {
//     // Handle animation started
//   }
// }
