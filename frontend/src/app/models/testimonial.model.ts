export interface Testimonial {
  name: string;
  company: string;
  images: [{
    url: string,
    alt: string,
  }];
  project: string;
  body: string;
}
