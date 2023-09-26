import React from "react";
import Image from "next/image";

const testimonialsData = [
  {
    name: "John Doe",
    comment: "One of the best services out there. They have my company saved money. We will always be working with them.",
    imageUrl: "/profilepic1.jpg",
  },
  {
    name: "Joe Brown",
    comment: "Exceptional service and support. Highly recommended!",
    imageUrl: "/profilepic2.jpg", 
  },
  {
    name: "Will Smith",
    comment: "One of the best services out there. They have my company saved money. We will always be working with them.",
    imageUrl: "/profilepic3.jpg", 
  },
  {
    name: "Joe Brown",
    comment: "Exceptional service and support. Highly recommended!",
    imageUrl: "/profilepic2.jpg", 
  },
  {
    name: "John Doe",
    comment: "One of the best services out there. They have my company saved money. We will always be working with them.",
    imageUrl: "/profilepic1.jpg",
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="flex flex-col my-4 md:my-8">
      <div className="flex flex-col mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl md:w-2/3 mx-auto">
          What People say about our company?
        </h1>
        <p className="text-md mx-auto w-2/3 font-light md:text-lg my-2 md:my-6">
          When you subscribe to our services, you build trust and increase
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:px-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col w-36 md:w-52 mx-auto my-3 md:my-6"
          >
            <div className="flex flex-row justify-center gap-2">
              <Image
                src={testimonial.imageUrl}
                width={800}
                height={1000}
                alt={`Profile Picture of ${testimonial.name}`}
                loading="lazy"
                className="rounded-full border-2 border-turbo-pink-400 object-cover h-8 w-8 md:h-18 md:w-18 my-auto"
              />
              <h2 className="text-sm md:text-md font-semibold my-auto">
                {testimonial.name}
              </h2>
            </div>
            <p className="p-2 text-justify text-xs italic md:text-md font-medium">
              "{testimonial.comment}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;