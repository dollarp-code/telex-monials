// components/TestimonialList.tsx
import React from 'react';
import { testimonials } from '../app/testimonial/data';
import Testimonial from './Testimonial';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const TestimonialList: React.FC = () => {
  return (
    <section className="px-6 py-16 bg-[#7141f8] rounded-[32px] flex flex-col justify-center items-center md:w-[1240px] md:mx-auto my-7">
      <div className="flex-col justify-start items-center gap-6 flex">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-1 h-[30px] w-[120px] py-1.5 rounded-[50px] border border-white/5 bg-white/10">
            <Image
              src={'/images/HeartStraight.png'}
              alt="love"
              width={16}
              height={16}
            />
            <span className="text-center text-white text-sm font-medium">
              Wall of love
            </span>
          </div>
          <h2 className="text-center text-white text-4xl md:text-5xl font-bold">
            What people say about Telex.
          </h2>
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="md:w-[1100px] mt-6"
        >
          <CarouselContent className="md:ml-10 flex flex-col md:flex-row md:flex-nowrap gap-6 md:gap-0 ">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/3">
                {' '}
                <Testimonial key={testimonial.id} testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialList;
