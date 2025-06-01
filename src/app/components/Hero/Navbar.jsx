'use client'

import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-scroll'
import { FaGripHorizontal } from 'react-icons/fa'
import Image from 'next/image'

const Navbar = () => {
  const [show, setShow] = useState(false)

  const Nav = [
    { name: 'About', link: '#About' },
    { name: 'Photos', link: '#Photos' },
    { name: 'Services', link: '#Services' },
    { name: 'Testimonials', link: '#Testimonials' },
    { name: 'Contact', link: '#Contact' },
  ]

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <div className='w-full h-20 lg:px-32 px-6 flex justify-between items-center text-white absolute top-0 z-50'>
      {/* <p className='text-[#FBAB55] text-2xl font-bold'>Breathe Pilates Studio</p> */}
     <Image src='/logo.jpg' alt='logo' width={70} height={10} className='rounded-full scale-75'/>
      {isMobile ? (
        <div className='relative'>
          <FaGripHorizontal
            className='text-2xl cursor-pointer'
            onClick={() => setShow(!show)}
          />
          {show && (
            <div className='absolute right-0 mt-4 w-40 bg-[#FBAB55] text-white rounded-lg shadow-lg py-2'>
              {Nav.map((item, index) => (
                <Link
                  to={item.link.substring(1)}
                  smooth={true}
                  duration={500}
                  key={index}
                  onClick={() => setShow(false)}
                >
                  <p className='px-4 py-2 hover:bg-white hover:text-[#FBAB55] cursor-pointer'>
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className='flex gap-12 font-semibold'>
          {Nav.map((item, index) => (
            <Link
              to={item.link.substring(1)}
              smooth={true}
              duration={500}
              key={index}
            >
              <p className='cursor-pointer link-underline'>{item.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
