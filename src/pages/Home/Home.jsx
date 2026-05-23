import { Link, useLoaderData } from 'react-router';
import googlePlay from '/google-play.svg'
import appStore from '/app-store.svg'
import heroImg from '/hero.png'
import App from '../../Components/Card/App';
import { useState } from 'react';

const Home = () => {
  const apps = useLoaderData();
  const [quantity, setQuantity] = useState(8);

  const handleQuantity  = () => {
    setQuantity((prev) => prev + 8);
  }
  
  return (
    <>
      <div className="max-w-360 mx-auto pt-20">
        <h1 className="text-7xl font-semibold text-black text-center mb-4">
          We Build <br />{" "}
          <span className="g-text-primary font-bold">Productive</span> Apps
        </h1>
        <p className="text-center text-gray-400 font-light text-xl">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex items-center justify-center gap-4 my-10">
          <Link>
            <img src={googlePlay} alt="" />
          </Link>
          <Link>
            <img src={appStore} alt="" />
          </Link>
        </div>
        <img className="mx-auto" src={heroImg} alt="" />
      </div>
      <div className="py-20 bg-linear-115 from-primary to-secondary">
        <div className="max-w-360 mx-auto">
          <h1 className="text-5xl font-semibold text-center text-base-100 mb-10">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex items-center justify-center gap-6">
            <div className="flex max-w-86 w-full flex-col items-center text-base-100 gap-4">
              <p className="opacity-80">Total Downloads</p>
              <h1 className="text-6xl font-semibold">29.6M</h1>
              <p className="opacity-80">21% more than last month</p>
            </div>
            <div className="flex max-w-86 w-full flex-col items-center text-base-100 gap-4">
              <p className="opacity-80">Total Reviews</p>
              <h1 className="text-6xl font-semibold">906K</h1>
              <p className="opacity-80">46% more than last month</p>
            </div>
            <div className="flex max-w-86 w-full flex-col items-center text-base-100 gap-4">
              <p className="opacity-80">Active Apps</p>
              <h1 className="text-6xl font-semibold">132+</h1>
              <p className="opacity-80">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 max-w-360 mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Trending Apps</h1>
          <p className="text-lg text-[#627382] mb-10 font-light">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-10">
          {apps.slice(0, quantity).map((app) => (
            <App app={app} key={app.id} />
          ))}
        </div>
        <div className='text-center'>
          {quantity < apps.length && (
            <button className='btn bg-linear-to-r from-primary to-secondary text-base-100' onClick={handleQuantity}>Load More</button>
          )}
        </div>
      </div>
    </>
  ); 
};

export default Home;