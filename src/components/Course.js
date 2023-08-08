import React from 'react';
import img1 from '../img/img1.jpg';
import { StarIcon } from '@heroicons/react/outline';

function Course({ item }) {
  return (
    <div className='flex flex-col items-start space-y-[1px]'>
      <img src={img1} alt="" className='h-32 w-full' />
      {/* <h2 className='font-bold text-md pt-1 '>
        {item.title}
      </h2> */}
    </div>
  );
}

export default Course;
