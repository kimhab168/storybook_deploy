import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="w-60 bg-slate-500 flex flex-col justify-between p-4 rounded-2xl">
      <Image
        src="https://nextui.org/images/hero-card-complete.jpeg"
        width={100}
        height={100}
        alt="Cover"
        className="w-56 rounded-lg"
      ></Image>
      <div className="w-56 text-center">
        <h1 className="font-semibold text-2xl text-yellow-400">Music Love</h1>
        <p>music is life, spending</p>
      </div>
    </div>
  );
};

export default Card;
