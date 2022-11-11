import React from 'react';

import Image from '../assets/img/images.jpg';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[50px] font-semibold leading-none mb-6'>
            <span className='text-blue-700'>RentLand</span> provides your Dream House.
           
          </h1>
          <p className='max-w-[480px] mb-8'>
            Hire your Dream House , achieve your dreams and get Great Deals with Us.
          </p>
        </div>
        <div className='hidden flex-1 lg:flex ' style={{paddingRight:"100px",paddingBottom:"100px",width:"400px",marginLeft:"175px"}}>
          <img src={Image} alt='' />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
