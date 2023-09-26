import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Jane Smith",
    role: "Founder & CEO",
    imageUrl: "/profilepic1.jpg",
  },
  {
    name: "John Doe",
    role: "CTO",
    imageUrl: "/profilepic2.jpg",
  },
  {
    name: "Will Smith",
    role: "COO",
    imageUrl: "/profilepic3.jpg",
  },
];

const Team = () => {
  return (
    <div id="team" className="flex flex-col bg-gray-100/50 py-2 md:py-6">
      <div className="flex flex-col mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl md:w-2/3 mx-auto">
          Our team{" "}
        </h1>
        <p className="text-md mx-auto w-2/3 font-light md:text-lg my-2 md:my-6">
          When you subscribe to our services, you build trust and increase{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex mx-auto my-4 md:my-6 flex-col">
            <Image
              src={member.imageUrl}
              width={800}
              height={1000}
              alt={`Profile Picture of ${member.name}`}
              className="rounded-full border-2 object-cover h-28 w-28 md:w-36 md:h-36 mx-auto"
            />
            <div>
              <h2 className="text-sm text-center md:text-md font-semibold my-auto">
                {member.name}
              </h2>
              <p className="text-xs md:text-sm font-medium text-center">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;