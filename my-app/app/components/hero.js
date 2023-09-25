import React from 'react'
import Image from "next/image";

const hero = () => {
  return (
    <div>
        <div className="container w-1/2 flex justify-center items-center">
            <div>
            <h4 className="text-[30px] "> Bridge Between companied and recuiters</h4>
        <span>Discovers the worlds#1 </span>
            </div>
            <div className="container w-1/2 flex justify-center items-center">
            <Image src="/Interview.png" alt="logo" width="50" height="50" className="rounded-full object-cover"/>
            </div>
        </div>
    </div>
  )
}

export default hero