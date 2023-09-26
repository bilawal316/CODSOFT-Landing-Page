import React from "react";
import MyBtn from "./mybutton";
import Image from "next/image";

const imageUrls = [
  "/services.png",
  "/services.png",
  "/services.png",
];

const Services = () => {
  return (
    <div id="services" className="flex flex-col my-6 md:my-10 mx-2 md:mx-auto">
      <div className="flex flex-col mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl md:w-2/3 mx-auto">
          How can we make your hiring job easier?{" "}
        </h1>
        <p className="text-md mx-auto w-2/3 font-light md:text-lg my-2 md:my-6">
          {" "}
          When you subscribe to our services, you build trust and increase{" "}
        </p>
      </div>
      <div className="flex flex-col md:mx-auto md:px-2 sm:grid sm:grid-cols-2 gap-4 mx-2 lg:grid-cols-3 justify-between">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className="flex flex-col mx-auto p-4 rounded-xl shadow-lg hover:shadow-xl shadow-gray-200/75"
          >
            <div className="flex flex-col">
              <Image
                src={imageUrl}
                width={800}
                height={1000}
                alt={`Image ${index}`}
                className="p-2 h-16 w-16 md:h-20 md:w-20 text-6xl my-2 md:my-6 opacity-95 bg-pink-500 text-white rounded-full mx-auto"
              />
              <h1 className="font-bold text-xl md:text-3xl">We take care of the details</h1>
              <p className="text-sm mx-auto w-2/3 font-light md:text-md my-2 md:my-6">
                Through clear communication and details, we bring support to your hiring managers
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto my-6 md:my-10">
        <MyBtn textContent="Become a Customer" />
      </div>
    </div>
  );
};

export default Services;
