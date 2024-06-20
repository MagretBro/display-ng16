
import {
  Component,
  Input,
  OnDestroy,
  TemplateRef,
  ChangeDetectionStrategy,
  OnInit,
  SimpleChanges,
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
        // transform: 'translateX(100%)',
        zIndex: 1
      })),
      state('previous', style({
        // transform: 'translateX(-100%)',
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

  currentPreviewIndex: number = 0; // Индекс текущего набора превью


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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['slides']) {
      this.select(0);
    }
  }

  select(index: number): void {
    this.resetTimer();
    const oldIndex = this.activeSlides.current; // Сохранение текущего индекса
    this.activeSlides = this.getPreviousCurrentNextIndexes(index);
    this.visibleSlides = this.getVisibleSlides(index);
    this.startTimer();

    if (this.differ?.diff(this.activeSlides)) { // Использование опциональной цепочки
      this.cd.detectChanges();
    }
  }

  getPreviousCurrentNextIndexes(index: number): ActiveSlides {
    const images = this.slides;

    return {
      previous: (index === 0 ? images.length - 1 : index - 1) % images.length,
      current: index % images.length,
      next: (index === images.length - 1 ? 0 : index + 1) % images.length
    };
  }


  // Получение видимых слайдов
  getVisibleSlides(startIndex: number): { url: string }[] {
    const visibleSlides = [];
    const visibleCount = Math.min(this.slides.length, 5); // Ограничение числа видимых слайдов до 5
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % this.slides.length;
      visibleSlides.push(this.slides[index]);
    }
    return visibleSlides;
  }

  // Переход к следующему набору превью
  nextPreviewSet(): void {
    if (this.slides.length <= 5) return;
    this.currentPreviewIndex = (this.currentPreviewIndex + 1) % this.slides.length;
    this.visibleSlides = this.getVisibleSlides(this.currentPreviewIndex);
    this.cd.detectChanges();
  }

  // Переход к предыдущему набору превью
  prevPreviewSet(): void {
    if (this.slides.length <= 5) return;
    this.currentPreviewIndex = (this.currentPreviewIndex - 1 + this.slides.length) % this.slides.length;
    this.visibleSlides = this.getVisibleSlides(this.currentPreviewIndex);
    this.cd.detectChanges();
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
        // this.direction = Direction.Next;
        this.select(this.activeSlides.next);
      },
       this.autoPlayDuration);
    }
  }


  animationDone(event: any) { }
  animationStarted(event: any) { }

}

