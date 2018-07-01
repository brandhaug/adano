import {Component, Input, OnInit} from '@angular/core';
import {Testimonial} from '../../models/testimonial.model';
import {TestimonialsService} from '../../services/testimonials.service';
import {environment} from "../../../environments/environment";
import {Section} from "../../models/section.model";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  @Input() content: Section;
  testimonials: Testimonial[];
  apiBaseUrl = environment.apiBaseUrl;

  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      // when window width is <= 480px
      1025: {
        slidesPerView: 1,
        spaceBetweenSlides: 20
      },
      // when window width is <= 640px
      1530: {
        slidesPerView: 2,
        spaceBetweenSlides: 50
      }
    }
  };

  constructor(private testimonialsService: TestimonialsService) {
  }

  ngOnInit() {
    this.testimonialsService.getTestimonials().subscribe(res => {
      this.testimonials = res;
    });
  }
}
