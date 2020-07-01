import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { GestureController } from '@ionic/angular';

import { Counter } from '../../models/counter';
import { CounterService } from '../../services/counter.service';

import { AppState } from '../../models/app-state';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-plus-minus-counter',
  templateUrl: './plus-minus-counter.component.html',
  styleUrls: ['./plus-minus-counter.component.scss'],
})
export class PlusMinusCounterComponent implements OnInit, AfterViewInit {

  readonly SWIPE_CLICK_WIDTH_RATIO = 0.3;

  @ViewChild('rootItem', {read: ElementRef}) rootItem: ElementRef;
  rootItemWidth: number;

  @ViewChild('textCenter', {read: ElementRef}) textCenter: ElementRef;
  @ViewChild('clickIndicator', {read: ElementRef}) clickIndicator: ElementRef;
  @ViewChild('buttonRight', {read: ElementRef}) rightButton: ElementRef;
  rightButtonWidth: number;

  @ViewChild('buttonLeft', {read: ElementRef}) leftButton: ElementRef;
  leftButtonWidth: number;

  @Input() counter: Counter;
  @Input() minHeight: number;
  @Input() hideTitle = false;
  @Input() showDetailsOnClick = true;

  swipeClickGesture;
  swipeClickGestureFirstRun = true;
  swipeClickLeft = false;
  swipeClickRight = false;

  constructor(
    private router: Router,
    private counterService: CounterService,
    private appStateService: AppStateService,
    private gestureCtrl: GestureController,
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if(this.appStateService.appState.swipeCounting){
      this.swipeClickGesture = this.gestureCtrl.create({
        el: this.rootItem.nativeElement,
        direction: 'x',
        threshold: 15,
        gestureName: 'swipe',
        onStart: ev => this.onStart(ev),
        onMove: ev => this.onMoveHandler(ev),
        onEnd: ev => this.onEnd(ev),
      });
      this.swipeClickGesture.enable();
    }
  }

  recordWidths(){
    this.rootItemWidth = this.rootItem.nativeElement.offsetWidth;
    this.rightButtonWidth = (this.rightButton) ? this.rightButton.nativeElement.offsetWidth : 0;
    this.leftButtonWidth = (this.leftButton) ? this.leftButton.nativeElement.offsetWidth : 0;
  }

  onStart(event: any) {

    // record widths of components on first run
    if(this.swipeClickGestureFirstRun){
      this.recordWidths();
      this.swipeClickGestureFirstRun = false;
    }

    this.swipeClickRight = false;
    this.swipeClickLeft = false;

    // disable click events
    if(this.rightButton){
      this.rightButton.nativeElement.style.pointerEvents = 'none';
    }
    if(this.leftButton){
      this.leftButton.nativeElement.style.pointerEvents = 'none';
    }
    this.textCenter.nativeElement.style.pointerEvents = 'none';

    requestAnimationFrame(() => {
      if (this.rightButton) {
        this.rightButton.nativeElement.style.removeProperty('transition');
      }
      if (this.leftButton) {
        this.leftButton.nativeElement.style.removeProperty('transition');
      }
    });
  }

  onMoveHandler(event: any) {

    const newRightButtonWidth = Math.min(
      this.rightButtonWidth - event.deltaX,
      this.rootItemWidth
    )
    if(this.rightButton){
      this.rightButton.nativeElement.style.width = Math.max(
        (this.leftButton) ? 0 : this.rightButtonWidth,
        newRightButtonWidth,
      ) + 'px';
    }

    const newLeftButtonWidth = Math.min(
      this.leftButtonWidth + event.deltaX,
      this.rootItemWidth
    );
    if(this.leftButton){
      this.leftButton.nativeElement.style.width = Math.max(
        (this.rightButton) ? 0 : this.leftButtonWidth,
        newLeftButtonWidth,
      ) + 'px';
    }

    if (this.rootItemWidth * this.SWIPE_CLICK_WIDTH_RATIO < newRightButtonWidth) {
      if(this.rightButton){
        this.rightButton.nativeElement.style.width = '100%';

        if(this.leftButton){
          this.leftButton.nativeElement.style.display = 'none';
        }

        if(this.clickIndicator){
          this.clickIndicator.nativeElement.style.display = 'none';
        }
        this.swipeClickRight = true;
      }
    } else if (this.rootItemWidth * this.SWIPE_CLICK_WIDTH_RATIO  < newLeftButtonWidth) {
      if(this.leftButton){
        this.leftButton.nativeElement.style.width = '100%';

        if(this.rightButton){
          this.rightButton.nativeElement.style.display = 'none';
        }

        if(this.clickIndicator){
          this.clickIndicator.nativeElement.style.display = 'none';
        }
        this.swipeClickLeft = true;
      }
    } else {
      if(this.rightButton){
        this.rightButton.nativeElement.style.display = 'block';
      }
      if(this.leftButton){
        this.leftButton.nativeElement.style.display = 'block';
      }
      if(this.clickIndicator){
        this.clickIndicator.nativeElement.style.display = 'block';
      }

      this.swipeClickRight = false;
      this.swipeClickLeft = false;
    }
  }

  onEnd(event: any) {

    // enable click events again
    if(this.rightButton){
      this.rightButton.nativeElement.style.pointerEvents = 'auto';
    }
    if(this.leftButton){
      this.leftButton.nativeElement.style.pointerEvents = 'auto';
    }
    this.textCenter.nativeElement.style.pointerEvents = 'auto';

    requestAnimationFrame(() => {
      if(this.rightButton){
        this.rightButton.nativeElement.style.setProperty('transition', '0.2s all ease');
        this.rightButton.nativeElement.style.display = 'block';
        this.rightButton.nativeElement.style.width = this.rightButtonWidth + 'px';
      }
      if(this.leftButton){
        this.leftButton.nativeElement.style.setProperty('transition', '0.2s all ease');
        this.leftButton.nativeElement.style.display = 'block';
        this.leftButton.nativeElement.style.width = this.leftButtonWidth + 'px';
      }

      if(this.clickIndicator){
        this.clickIndicator.nativeElement.style.display = 'block';
      }
    });


    if(this.swipeClickRight){
      if(this.rightButton){
        this.rightButton.nativeElement.click()
      }
    }

    if(this.swipeClickLeft){
      if(this.leftButton){
        this.leftButton.nativeElement.click()
      }
    }
  }

  async countPlus() {
    if (!this.counter.locked){
      await this.counterService.count(
        this.counter,
        this.counter.plusCount,
      );
    }
  }

  async countMinus() {
    if (!this.counter.locked){
      await this.counterService.count(
        this.counter,
        this.counter.minusCount,
      );
    }
  }

  showDetails() {
    if(this.showDetailsOnClick){
      this.router.navigate(['/counter-detail', this.counter.id]);
    }
  }

}
