import React from 'react';
import './Hero2.css';

const Hero2 = () => {
    return (
        // Container
        <div className="colo">

            {/* Main content */}
            <div className="column-layout">
                {/* Text heading and description */}
                <div className="text-heading">
                    <div>
                        <h1>Notre marché</h1>
                        <p className='p1'>Plus de 5 000 employés et 250 000 points de vente</p>
                        <p className="large">Aujourd’hui, ECCBC embouteille et distribue le portefeuille de la société Coca-Cola dans 13 pays africains, réalisant plus de 2.088 milliards de transactions par an.

</p>
                    </div>
                </div>

                {/* Image container */}
                <div className="image-container">
                    <img src="https://www.eccbc.com/wp-content/uploads/2023/05/ECCBC_Mapa_23-1024x901.jpg" alt="App Screenshot" />
                </div>

                
            </div>
        </div>
    );
}

export default Hero2;
