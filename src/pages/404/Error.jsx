import React from 'react';
import error404 from '/404.svg'
import { useNavigate } from 'react-router';
const Error = () => {
  const navigate = useNavigate();

  return (
    <div className='py-10'>
      <div className="flex justify-center">
        <img src={error404} alt="" />
      </div>
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4">Oops, page not found!</h1>
        <p className="text-lg text-[#627382]  font-light mb-4">
          The page you are looking for is not available.
        </p>
        <button onClick={()=> navigate(-1)} className="btn bg-linear-120 from-primary to-secondary text-white">
          Go Back!
        </button>
      </div>
    </div>
  ); 
};

export default Error;