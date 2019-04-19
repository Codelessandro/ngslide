import {AfterContentInit, Component, ContentChildren, HostListener, OnInit} from '@angular/core';
import {QueryList} from '@angular/core/src/render3';
import {NgslidesComponent} from '../ngslides.component';

export enum KEY_CODE {
  UP_ARROW_W = 87,
  DOWN_ARROW_S = 83
}

@Component({
  selector: 'app-ngpres',
  templateUrl: './ngpres.component.html',
  styleUrls: ['./ngpres.component.css']
})
export class NgpresComponent implements OnInit, AfterContentInit {

  current: number = 0;
  @ContentChildren(NgslidesComponent) contentChildren;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

  moveto(id) {
    document.getElementById(id).scrollIntoView();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.UP_ARROW_W) {
      this.decrement();
    }

    if (event.keyCode === KEY_CODE.DOWN_ARROW_S) {
      this.increment();
    }
  }


  increment() {
    if (this.current < this.contentChildren.length) {
      this.current += 1;
      this.moveto('slide' + this.current);
    }
  }

  decrement() {
    if (this.current > 1) {
      this.current -= 1;
      this.moveto('slide' + this.current);
    }
  }


}
