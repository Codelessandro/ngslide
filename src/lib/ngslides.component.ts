import {Component, HostListener, OnInit} from '@angular/core';
import {SlideNumberService} from './slide-number.service';


@Component({
  selector: 'lib-ngslides',
  templateUrl: './ngslides.component.html',
  styleUrls: ['./ngslides.component.css'],
})
export class NgslidesComponent implements OnInit {

  slideNumber: number = 0;

  constructor(private slideNumberService: SlideNumberService) {
  }


  ngOnInit() {
    this.slideNumber = this.slideNumberService.getNumber();
  }

  markCurrent() {

  }

}
