import Image from 'next/image';
import React from 'react';

const HeroCard = () => {
  return (
    <>
      <div className="flex items-center gap-20 rounded-2xl w-[50vw] h-[9rem] bg-white px-12 py-6">
        <Image
          src="/hero_logo.png"
          height={80}
          width={80}
          layout="fixed"
          className="rounded-full overflow-hidden"
        />
        <div className="flex flex-col justify-center">
          <span className="text-gray-700 font-bold text-[1.4rem] leading-10">
            Vejle Running Sushi
          </span>
          <span className="text-gray-400">
            Asiatisk · Sushi · Salat · Dessert
          </span>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
