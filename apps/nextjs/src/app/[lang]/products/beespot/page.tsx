'use client';
import React from 'react';
import Slider from 'react-slick';
import { FaWhatsapp } from 'react-icons/fa'; // Importa o ícone do WhatsApp
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BeeSpotPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
        <div>
            <div className="flex items-center mt-16">
                <img className="block mx-auto" src="/images/logoBeeSpot.png" alt="BeeSpot Logo" />
            </div>
            <div className="w-full">
                <Slider {...settings} className="flex items-center">
                    <div className="p-4">
                        <div className="h-[600px] bg-[url('/images/bannerbeespot.png')] bg-cover bg-center rounded-lg flex items-center justify-center text-white text-lg font-semibold">
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="h-[600px] bg-[url('/images/2banner.png')] bg-cover bg-center rounded-lg flex items-center justify-center text-white text-lg font-semibold">
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="h-[600px] bg-[url('/images/3banner.png')] bg-cover bg-center rounded-lg flex items-center justify-center text-white text-lg font-semibold">
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="h-[600px] bg-[url('/images/4banner.png')] bg-cover bg-center rounded-lg flex items-center justify-center text-white text-lg font-semibold">
                        </div>
                    </div>
                </Slider>
            </div>

            <a
                href="https://wa.me/numerodestelefone"
                className="fixed bottom-8 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp className="w-8 h-8" />
            </a>
        </div>
    );
}

export default BeeSpotPage;
