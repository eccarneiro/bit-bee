"use client";
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="w-full px-4 py-8  bg-opacity-35 -ml-14 -mt-16"> {/* Adiciona padding e background */}
            <h2 className="text-2xl font-bold text-center mb-6">Nossos Produtos</h2>
            <Slider {...settings} className="flex items-center"> {/* Centraliza o conteúdo */}
                <div className="p-4">
                    <div className="h-64 bg-blue-500 rounded-lg flex items-center justify-center text-white text-lg font-semibold">
                        Slide 1
                    </div>
                </div>
                <div className="p-4">
                    <div className="h-64 bg-red-500 rounded-lg flex items-center justify-center text-white text-lg font-semibold">
                        Slide 2
                    </div>
                </div>
                <div className="p-4">
                    <div className="h-64 bg-green-500 rounded-lg flex items-center justify-center text-white text-lg font-semibold">
                        Slide 3
                    </div>
                </div>
                <div className="p-4">
                    <div className="h-64 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-lg font-semibold">
                        Slide 4
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default CardCarousel;
