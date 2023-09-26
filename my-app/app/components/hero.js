"use client"
import Image from "next/image";
import MyBtn from "./mybutton";

 
 
const Hero = () => {
  
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row justify-center my-5 md:my-8"
    >
      <div className="flex flex-col my-auto md:w-2/3">
        <div className="flex flex-col">
          <h1 className="font-extrabold text-4xl md:text-6xl">
            Bridge Between companines and recuiters.
          </h1>
          <p className="text-sm mx-auto w-2/3 font-light md:text-md my-2 md:my-6">
          "Discover the World's #1 ranked talent acquisition experts with 10 years of experience in various industries".
          </p>
        </div>
        <div className="mx-auto hover:cursor-pointer">
          <MyBtn textContent="Discover Now" />
        </div>
      </div>
      <Image
        src="/Interview.jpg"
        width={900}
        height={1000}
        alt="hero image"
        loading="lazy"
        className="invisible md:visible my-auto md:w-2/3"
      />
    </div>
  );
};
 
export default Hero;