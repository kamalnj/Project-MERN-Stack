import React from 'react';

const Section2 = () => {
    return (
        <div className="bg-slate-50">
            <div className="relative">
                <img
                    className="object-cover w-full h-56 sm:h-80 md:h-96 lg:h-[40rem]"
                    src="https://www.eccbc.com/wp-content/uploads/2022/04/home_2.jpg"
                    alt="Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-gray-900 bg-opacity-50 p-4 sm:p-6">
                    <h2 className="relative mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight sm:leading-none">
                        <span className="relative">Una famille en croissance</span>
                    </h2>
                    <p className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl">
                        Dans chaque pays, nous fournissons différentes variétés de boissons non alcoolisées rafraîchissantes ainsi que des boissons hypocaloriques, qui sont divisées en cinq catégories de produits.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Section2;
