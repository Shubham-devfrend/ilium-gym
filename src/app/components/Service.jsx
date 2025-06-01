'use client';

import React, { useRef } from 'react';
import Head from './Head';
import SpotlightCard from '../Others/SpotlightCard';
import { Services } from '../data';
import { motion, useInView } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';

const ServiceVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + index * 0.2, duration: 0.4 },
  }),
};

const Service = () => {
  const title = 'Premium Experience';
  const subtitle = 'Our Fitness Services';

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full lg:px-32 px-6 py-16 flex flex-col justify-center bg-[#1e1e1e]">
      <Head title={title} subtitle={subtitle} />
      <div className="w-full flex flex-col gap-4 items-center pt-8">
        {isMobile ? (
          <div className="w-full">
            <Slider {...settings}>
              {Services.map((item, index) => (
                <div key={index} className="px-3">
                  <SpotlightCard
                    className="w-full h-80 justify-center rounded-xl border border-neutral-700 hover:border-[#FBAB55] duration-300 px-4 py-6 gap-6 flex flex-col cursor-pointer"
                    spotlightColor="rgba(225, 229, 255, 0.2)"
                  >
                    <div className="lg:w-28 lg:h-28 bg-neutral-700 rounded-xl flex items-center justify-center py-2">
                      <div className="bg-[#FBAB55] rounded-full w-16 h-16 flex justify-center items-center text-xl">
                        {item.icon}
                      </div>
                    </div>
                    <p className="font-bold lg:text-xl text-[#FBAB55]">{item.title}</p>
                    <div className="flex flex-col gap-3 text-neutral-400 lg:text-base text-xs">
                      <p>{item.description}</p>
                      <ul>
                        <li>&bull; {item.features[0]}</li>
                        <li>&bull; {item.features[1]}</li>
                      </ul>
                    </div>
                  </SpotlightCard>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div ref={ref} className="flex gap-16 flex-wrap justify-center">
            {Services.map((item, index) => (
              <motion.div
                key={index}
                variants={ServiceVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={index}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <SpotlightCard
                  className="w-96 h-[450px] justify-center rounded-xl border border-neutral-700 hover:border-[#FBAB55] duration-300 px-4 py-6 flex flex-col gap-6 cursor-pointer"
                  spotlightColor="rgba(225, 229, 255, 0.2)"
                >
                  <div className="w-28 h-28 bg-neutral-700 rounded-xl flex items-center justify-center">
                    <div className="bg-[#244240] rounded-full w-16 h-16 flex justify-center items-center text-xl">
                      {item.icon}
                    </div>
                  </div>
                  <p className="font-bold text-xl text-[#FBAB55]">{item.title}</p>
                  <div className="flex flex-col gap-3 text-neutral-400">
                    <p>{item.description}</p>
                    <ul>
                      <li>&bull; {item.features[0]}</li>
                      <li>&bull; {item.features[1]}</li>
                    </ul>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
