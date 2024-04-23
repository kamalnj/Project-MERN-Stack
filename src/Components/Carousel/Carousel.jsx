import React from 'react';
import { useState } from 'react';
import './Carousel.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);
    const totalSlides = data.length;

    const nextSlide = () => {
        setSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="carousel-container"> {/* Wrap the carousel in this container */}
            <div className='carousel'>
                <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
                {data.map((item, idx) => (
                    <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? 'slide' : 'slide slide-hidden'} />
                ))}
                <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
                <span className='indicators'>
                    {data.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSlide(idx)}
                            className={slide === idx ? 'indicator' : 'indicator indicator-inactive'}
                        />
                    ))}
                </span>
            </div>
        </div>
    );
};

export default Carousel;
