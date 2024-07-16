"use client"
import Image from "next/image";
 
const Goal = () => {
 
  return (
    <div className="bg-gray-100/50 rounded-sm my-10 py-0 md:px-6 flex flex-col md:flex-row justify-between">
      <Image 
      src="/Achieve.png"
      width={800}
      height={1000}
      alt="goal img" 
      className="md:w-2/4 my-auto" />
 
      <div className="flex flex-col justify-center my-auto p-6 md:w-3/5">
        <h5 className="text-gray-600 text-md md:my-4 font-semibold">
        LETS ACHIEVE MORE.
        </h5>
        <h3 className="font-bold text-2xl md:text-4xl my-4">
        Get the benefit of working with the experts.
        </h3>
      </div>
    </div>
  );
};
 
export default Goal;