import React from 'react';

const Section4 = () => {
    return (
        <div className="relative bg-red-800">
          <div className="absolute inset-x-0 bottom-0">
            <svg
              viewBox="0 0 224 12"
              fill="currentColor"
              className="w-full -mb-1 text-white"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
            </svg>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
              <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Notre marché              
                 </h2>
              <p className="mb-6 text-2xl  font-normal tracking-wide text-gray-300 ">
              Aujourd’hui, ECCBC embouteille et distribue le portefeuille de la société Coca-Cola dans 13 pays africains, atteignant plus de 160 millions de consommateurs.
              </p>

             
            </div>
          </div>
        </div>
      );
}

export default Section4;
