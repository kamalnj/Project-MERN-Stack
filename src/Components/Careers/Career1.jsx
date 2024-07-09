import React from 'react';

const Career1 = () => {
    return (
        <div className="bg-slate-50">
            {/* Career1 section content */}
            <div className="relative">
                <img
                    className="object-cover w-full h-56 sm:h-80 md:h-96 lg:h-[40rem]"
                    src="https://www.eccbc.com/wp-content/uploads/2022/11/Work-with-us.jpg"
                    alt='bg'
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-gray-900 bg-opacity-50 px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
                    <h2 className="relative mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight sm:leading-none">
                        <span className="relative">Développez votre carrière avec nous</span>
                    </h2>
                    <p className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl lg:text-2xl">
                    Votre potentiel et votre talent se développeront dans le meilleur environnement possible, dynamique, créatif et responsable avec le milieu qui vous entoure.                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                        ECCBC est une entreprise leader et vous serez en contact avec les professionnels les plus qualifiés du marché africain. Nous partageons les espoirs et les aspirations de nos communautés et croyons en ce que nous faisons. Nous aimons travailler et sommes passionnés par nos produits, nos clients et nos employés.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Career1;
