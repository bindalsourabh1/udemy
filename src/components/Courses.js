import React from 'react'
import Course from './Course'
import data from '../data.json'
function Courses() {
  return (
    <div className='flex flex-col items-start mx-8 space-y-3 mt-14 mb-8'>
      <h2 className='text-4xl font-bold'> A broad selction of Courses</h2>
      <h3 className='text-xl'>Choose from 183,000 online video courses with new addition published every month</h3>
      <div className='text-xs lg:text-xl flex space-x-4 ml-1 font-bold text-gray-500 cursor-pointer'>
        <h3>Python</h3>
        <h3>Excel</h3>
        <h3>Web Devlopment</h3>
        <h3>JavaScipt</h3>
        <h3>Data Science</h3>
        <h3>AWS Certificate</h3>
        <h3>Drawing</h3>
      </div>
      <div className='text-left w-full border border-gray-300 p-7'>
        <h2 className='text-2xl font-bold mb-2  '>Expand your carrer Oppurtunities with Universe Code</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aperiam distinctio quaerat dolorum magnam cupiditate labore, ullam dolore incidunt. Corrupti, voluptatibus perspiciatis. Voluptate animi voluptatum, atque harum maxime consequuntur molestiae.</h3>
        <button className='border border-black fontt-bold text-sm p-2 mt-4 mb-8 '>
          Universe Code
        </button>
        <div className='flex gap-4 flex-wrap lg:flex-nowrap'>
          {data.map((item, index) => (
            <div className='h-60 w-60' key={index}>

              <Course item={item} />

            </div>
          ))}

        </div>
      </div>
    </div>


  )
}

export default Courses
