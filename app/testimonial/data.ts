export interface Testimonial {
  id: number;
  text: string;
  author: string;
  company: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Telex's user-centric approach is what sets them apart. The platform is intuitive and customizable, allowing us to tailor it to our specific workflows. The support team is also exceptional, always there to assist us whenever we need help.",
    author: 'Sarah Thompson',
    company: 'Company123',
    image: '/images/sarah.jpg',
  },
  {
    id: 2,
    text: "We've seen tremendous results since implementing Telex. Our event management processes have become more efficient, and the automation features have saved us valuable time. It's a fantastic solution for any business.",
    author: 'Sarah Thompson',
    company: 'Company123',
    image: '/images/sarah.jpg',
  },
  {
    id: 3,
    text: "Telex has transformed how we handle critical events. The platform's seamless integrations with our existing systems have enabled us to centralize our communication and monitoring processes.",
    author: 'Sarah Thompson',
    company: 'Company123',
    image: '/images/sarah.jpg',
  },
  {
    id: 4,
    text: "Telex has transformed how we handle critical events. The platform's seamless integrations with our existing systems have enabled us to centralize our communication and monitoring processes.",
    author: 'Sarah Thompson',
    company: 'Company123',
    image: '/images/sarah.jpg',
  },
];
