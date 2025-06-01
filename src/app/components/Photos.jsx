'use client'
import { useInView,motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Head from './Head';

const num = [
  { image: '/image1.jpg' },
  { image: '/image2.jpg' },
  { image: '/image3.jpg' },
  { image: '/image4.jpg' },
  { image: '/image5.jpg' },
  { image: '/image6.jpg' },
];

const PhotosVariants = {
  hidden:{
    opacity:0, y:-30
  },
  visible:(index)=>({
    opacity:1,y:0,
    transition:{delay:0.1+ index*0.2,duration:0.4}
  })
}

const Photos = () => {
  
  const title = 'See How We Make Customer Perfect'
  const subtitle = 'Photos'

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full px-6 md:px-28 py-16 bg-[#1A1A1A]">
      {/* Heading */}
      <Head title={title} subtitle={subtitle}/>

      {/* Horizontal Scrollable Images */}
      <div ref={ref} className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 no-scrollbar py-8">
        {num.map((item, index) => (
          <motion.div key={index} variants={PhotosVariants} initial='hidden' animate={isInView ? 'visible' : 'hidden'} custom={index} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="lg:min-w-[450px] lg:h-[550px] min-w-[200px] h-[300px] relative rounded-xl overflow-hidden flex-shrink-0">
            <Image src={item.image} alt={`coffee-${index}`} fill className="object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
