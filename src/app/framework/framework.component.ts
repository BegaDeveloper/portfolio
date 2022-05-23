import { Component, ViewEncapsulation, ViewChild,OnInit } from "@angular/core";
import { FreeMode } from "swiper";
import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Pagination]);

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FrameworkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  toTop() {
    document.documentElement.scrollTop = 0;
  }
}
