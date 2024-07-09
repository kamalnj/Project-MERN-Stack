import React from 'react';

const Durabilité1 = ({ cards }) => {
  return (
    <div className='bg-slate-50'>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
          {cards.map((card, index) => (
            <div key={index} className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
              <div className="relative">
                <img
                  className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                  src={card.imageUrl}
                  alt=''
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
              </div>
              <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  {card.title}
                </h5>
                <p className="mb-5 text-gray-700">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Durabilité1;
