import React, { useEffect, useState } from 'react';
import { getDataFromLS, removeDataFromLS } from '../../localStorage';
import { useLoaderData } from 'react-router';
import List from '../../Components/ListCard/List';
import { MdOutlineArrowDropDown } from 'react-icons/md';

const InstalledApps = () => {
  const apps = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);
  const [sort, setSort] = useState("Sort By Size");
  // console.log(installedApps);
  useEffect(() => {
    const storedData = getDataFromLS();

    const newList = [];

    for (const storedId of storedData) {
      const app = apps.find((app) => app.id === storedId);
      
      if (app) {
        newList.push(app);
      }
    }

    setInstalledApps(newList);

  }, [apps]);
  
  const handleUninstall = (id) => {
    console.log(id, "Uninstalled");
    const newList = installedApps.filter(app => app.id !== id);
    removeDataFromLS(id);
    console.log(newList);
    setInstalledApps(newList);
  };
  
  const handleSort = (type) =>{
    setSort(type)

    if (type === "High-Low") {
      return installedApps.sort((a, b) => b.size - a.size);
    } else {
      return installedApps.sort((a, b) => a.size - b.size);
    }
  }

  return (
    <div className="mx-auto max-w-360 py-20">
      <title>Installed Apps - HeroAI</title>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Your Installed Apps</h1>
        <p className="text-lg text-[#627382] mb-10 font-light">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center mb-3">
        <p className='text-lg'>{installedApps.length} Apps Found</p>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn px-2 text-base font-light text-[text-[#627382] bg-[#f5f5f5] border-mist-200 mb-1 rounded-md w-35">
            {sort}
            <MdOutlineArrowDropDown />
          </div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-md z-1 w-35 p-2 shadow-sm">
            <li><a className='font-light rounded-md' onClick={() => handleSort("High-Low")}>High-Low</a></li>
            <li><a className='font-light rounded-md' onClick={() => handleSort("Low-High")}>Low-High</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {
          installedApps.map((app) => (
            <List app={app} key={app.id} handleUninstall={handleUninstall} />
          ))
        }
      </div>
    </div>
  );
};

export default InstalledApps;