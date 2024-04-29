import React from 'react';

const About1 = () => {
    return (
        <div className="bg-slate-50 w-full py-16 mx-auto">
            <div className="flex flex-col lg:flex-row w-full lg:px-16">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0 lg:pr-5">
                    <h2 className="ml-10 mt-16 text-3xl font-bold tracking-tight text-red-900 sm:text-4xl sm:leading-none">
                        À propos de nous
                    </h2>
                </div>
                <div className="lg:w-1/2 w-full lg:pl-5">
                    <p className="text-xl lg:text-2xl text-black">
                        Nous sommes un partenaire d’embouteillage de The Coca-Cola Company en Afrique du Nord et de l’Ouest, où nos équipes produisent, commercialisent et distribuent les marques les plus appréciées au monde et un large choix de boissons de haute qualité.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About1;
