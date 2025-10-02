import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, StarHalf, StarOff } from "lucide-react";

const testimonials = [
  {
    name: "User",
    title: "Developer",
    quote:
      "I am an advertiser, app developer, service provider or agency looking to reach the right customers and maximize.",
    image: "/user.jpg",
    rating: 5,
  },
  {
    name: "User2",
    title: "Developer",
    quote:
      "You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed.",
    image: "/user2.jpg",
    rating: 5,
  },
  {
    name: "User3",
    title: "Developer",
    quote:
      "You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed.",
    image: "/user3.jpg",
    rating: 5,
  },
  {
    name: "User2",
    title: "Developer",
    quote:
      "You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed.",
    image: "/user2.jpg",
    rating: 5,
  },
  {
    name: "User",
    title: "Developer",
    quote:
      "You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed.",
    image: "/user.jpg",
    rating: 5,
  },
  {
    name: "User3",
    title: "Developer",
    quote:
      "You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed.",
    image: "/user3.jpg",
    rating: 5,
  },
  {
    name: "User2",
    title: "Developer",
    quote:
      "You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed.",
    image: "/user2.jpg",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="bg-[#0F1426]">
      <div className=" w-full custom-container py-22">
        <h2 className="text-white font-semibold text-center text-5xl mb-26">
          Testimonials
        </h2>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="relative "
        >
          <CarouselContent className="-ml-4 md:-ml-6 ">
            {testimonials.map((t, idx) => (
              <CarouselItem
                key={idx}
                className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3 "
              >
                <div className="h-[437px] flex flex-col items-center text-center bg-[#2B2A4E] text-white rounded-xl p-6 md:p-8">
                  <img
                    src="/comma.svg"
                    alt="Comma"
                    className=" mb-4 opacity-50"
                  />
                  <p className="text-3xl font-semibold mb-4">Perfectly!</p>
                  <p className="text-base text-gray-400 mb-6 max-w-lg">
                    “{t.quote}”
                  </p>
                  <div className="flex flex-col items-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full border-2 border-white mb-2"
                    />
                    <h4 className="text-lg font-medium">{t.name}</h4>
                    <p className="text-sm text-gray-400">{t.title}</p>
                    <div className="flex mt-2 text-yellow-400">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5" />
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute top-1/2 -left-5 -translate-y-1/2 bg-white text-gray-700 p-5 rounded-full shadow-md cursor-pointer ">
            ‹
          </CarouselPrevious>
          <CarouselNext className="absolute top-1/2 -right-5 -translate-y-1/2 bg-white text-gray-700 p-5 rounded-full shadow-md cursor-pointer">
            ›
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
