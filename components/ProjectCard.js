import React from 'react';

export default function ProjectCard({ title, img, link }) {
  return (
    <div className='projectCard flex w-full sm:w-1/2 p-2 text-center sm:text-justify'>
      <div className='sm:flex shadow-2xl w-full bg-teal-600 rounded-lg p-4'>
        {
          img ? 
          <img src={img} width={100} />
          :null
        }
        <div className="sm:ml-4 self-center">
          <h2 className='text-2xl text-teal-200 font-semibold'>{title}</h2>
          <a className="w-full text-teal-200" href={link} target='_blank' rel='noopener noreferrer'>
            <button className="bg-teal-800 hover:bg-teal-500 rounded-lg py-2 px-16 sm:px-20">
              Visit
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
