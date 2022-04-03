import s1 from "../assets/carousel/c1.jpg";
import s2 from "../assets/carousel/c2.jpg";
import s3 from "../assets/carousel/c3.jpg";

import Image from "next/image";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="">
            <Image
              src={s1}
              alt="Slide 1"
              layout="fill"
              className="relative brightness-50"
            />
            <div className="absolute text-white font-bold flex items-center justify-center flex-col text-center w-auto md:w-screen md:ml-[-5vw] h-[280px] md:h-[650px]">
              <h1 className="md:text-5xl text-[25px] uppercase mb-[10px] md:mb-[30px]">
                Welcome to My Pokedex
              </h1>
              <h2 className="md:text-3xl text-[18px]">
                Let's go for an Adventure togther in pokemon world!
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <Image
              src={s2}
              alt="Slide 2"
              layout="fill"
              className="relative brightness-50"
            />
            <div className="absolute text-white font-bold flex items-center justify-center flex-col text-center w-auto md:w-screen h-[280px] md:h-[650px]">
              <h1 className="md:text-5xl text-[25px] uppercase mb-[10px]">
                Gotta Catch em all!
              </h1>
              <h2 className="md:text-3xl text-[18px]">
                Are you gonna be the next pokemon master?
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <Image
              src={s3}
              alt="Slide 3"
              layout="fill"
              className="relative brightness-50"
            />
            <div className="absolute text-white font-bold flex items-center justify-center flex-col text-center w-auto md:w-screen md:ml-[-5vw] h-[280px] md:h-[650px]">
              <h1 className="md:text-5xl text-[25px] uppercase mb-[10px]">
                This Pokedex Created by:
              </h1>
              <h2 className="md:text-3xl text-[18px]">Aditya Fabio Hariawan</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <style jsx global>{`
        .swiper {
          width: 100%;
          height: 280px;
        }

        .swiper-slide {
          background-size: contain;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
          height: 280px;
        }

        .swiper-button-next,
        .swiper-button-prev,
        .swiper-button-disabled,
        .swiper-button-disabled {
          opacity: 0 !important;
        }

        @media (min-width: 768px) {
          .swiper,
          .swiper-slide img {
            height: 670px;
          }
          .swiper-button-next,
          .swiper-button-prev {
            opacity: 1 !important;
          }
          .swiper-button-disabled,
          .swiper-button-disabled {
            opacity: 0.3 !important;
          }
        }
      `}</style>
    </>
  );
}
