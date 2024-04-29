import React from 'react';

const About3 = () => {
    return (
<div className="bg-slate-50 py-16  ">
            <h2 className="text-center text-red-900 font-bold text-3xl mb-8">Nos chiffres</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                {/* Item 1 */}
                <div className="flex flex-col items-center justify-center text-center">
                    <figure className="w-24 h-24 lg:w-32 lg:h-32">
                        <img src="https://www.eccbc.com/wp-content/plugins/cv-cocacola/assets/icons/turnover.svg" alt="Turnover Icon" className="w-full h-full" />
                    </figure>
                    <h6 className="text-4xl font-bold lg:text-5xl mt-2">880</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase">Chiffres d'affaires (M€)</p>
                </div>
                
                {/* Item 2 */}
                <div className="flex flex-col items-center justify-center text-center">
                    <figure className="w-24 h-24 lg:w-32 lg:h-32">
                        <img src="https://www.eccbc.com/wp-content/plugins/cv-cocacola/assets/icons/transactions.svg" alt="Transactions Icon" className="w-full h-full" />
                    </figure>
                    <h6 className="text-4xl font-bold lg:text-5xl mt-2">2,088</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase">Milliards de transactions</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <figure className="w-28 h-28 lg:w-36 lg:h-36 flex justify-center items-center"><img src="https://www.eccbc.com/wp-content/plugins/cv-cocacola/assets/icons/employees.svg" alt="Employees Icon" /></figure>
                    <h6 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">+5,000</h6>
                    <p className="text-xs sm:text-sm lg:text-base font-medium tracking-widest text-gray-800 uppercase mt-1">Salariés</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <figure className="w-28 h-28 lg:w-36 lg:h-36 flex justify-center items-center"><img src="https://www.eccbc.com/wp-content/plugins/cv-cocacola/assets/icons/bottling_plants.svg" alt="Bottling Plants Icon" /></figure>
                    <h6 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">10</h6>
                    <p className="text-xs sm:text-sm lg:text-base font-medium tracking-widest text-gray-800 uppercase mt-1">Usines d’embouteillage</p>
                </div>
                
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                {/* Other items */}
                <div className="flex flex-col items-center justify-center text-center">
                    <figure className="w-24 h-24 lg:w-32 lg:h-32">
                        <img src="https://www.eccbc.com/wp-content/plugins/cv-cocacola/assets/icons/production_lines.svg" alt="Production Lines Icon" className="w-full h-full" />
                    </figure>
                    <h6 className="text-4xl font-bold lg:text-5xl mt-2">42</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase">Lignes de production</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <figure className="w-28 h-28 lg:w-36 lg:h-36 flex justify-center items-center"><img src="https://www.eccbc.com/wp-content/plugins/cv-cocacola/assets/icons/countries.svg" alt="Countries Icon" /></figure>
                    <h6 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">13</h6>
                    <p className="text-xs sm:text-sm lg:text-base font-medium tracking-widest text-gray-800 uppercase mt-1">Pays</p>
                </div>            </div>
        </div>
    );
};

export default About3;
