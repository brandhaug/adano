export interface Testimonial {
  name: string;
  company: string;
  image: {
    url: string,
    alt: string,
  };
  project: string;
  body: string;
}
