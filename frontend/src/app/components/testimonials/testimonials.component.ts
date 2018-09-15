import {Component, Input, OnInit} from '@angular/core';
import {Testimonial} from '../../models/testimonial.model';
import {TestimonialsService} from '../../services/testimonials.service';
import {environment} from "../../../environments/environment";
import {Section} from "../../models/section.model";
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  @Input() content: Section;
  testimonials: Testimonial[];
  apiBaseUrl = environment.apiBaseUrl;

  config: SwiperConfigInterface = {
    pagination: true,
    navigation: true,
    observer: true,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      850: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1230: {
        slidesPerView: 2,
        spaceBetween: 50
      }
    }
  };

  constructor(private testimonialsService: TestimonialsService) {
  }

  ngOnInit() {
    this.testimonialsService.getTestimonials().subscribe(res => {
      this.testimonials = res;
      console.log(JSON.stringify(res));
    });
  }
}
