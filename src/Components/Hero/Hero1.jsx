import React from 'react';
import "./Hero1.css";
import Carousel from '../Carousel/Carousel.jsx';
import data from "../../data/carouselData.json";

const slides = data.slides; 

const Hero1 = () => {
    return (
        <div className='hero1'>
            <p className='hero1__text'>Nous sommes l’embouteilleur de The Coca-Cola Company en Afrique du Nord et de l’Ouest,<br></br> 
             où nos équipes produisent, commercialisent et distribuent les marques les plus appréciées<br></br> au monde  
             et un large choix de boissons de haute qualité.</p>
             <Carousel data={slides}/>
        </div>
    );
}

export default Hero1;
