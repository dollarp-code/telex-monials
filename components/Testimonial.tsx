import React from 'react';
import { Testimonial as TestimonialType } from '../app/testimonial/data';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface TestimonialProps {
  testimonial: TestimonialType;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <article className=" w-[325px] p-6 rounded-[24px]  bg-white md:[350px] md:h-[262px]">
      <p className="text-base text-[#98A2B3] font-normal leading-normal">
        {testimonial.text}
      </p>
      <div className="flex items-center mt-4">
        <Image
          src={testimonial.image}
          alt={testimonial.author}
          width={44}
          height={44}
          className="mr-4"
        />
        <div>
          <h4 className="text-sm text-[#98A2B3] font-semibold ">
            {testimonial.author}
          </h4>
          <p className="text-sm text-[#d0d0fd] font-normal">
            {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Testimonial;
