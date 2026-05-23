
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '/download.svg'
import ratingIcon from '/star.svg'
import reviewIcon from '/thumbsup.svg'
import ReviewsChart from '../../Components/ReviewsChart/ReviewsChart';
import { getDataFromLS, setDataToLS } from '../../localStorage';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const AppDetails = () => {
  const [visible, setVisible] = useState(false);
  const apps = useLoaderData();
  const { appId} = useParams();
  const handleAppInstall = (id) => {
    setDataToLS(id);
    setVisible(true);
  };

  const getInstalledId = getDataFromLS();
  // const handleBtnAbility = (appId) => {
    const matchedID = getInstalledId.find((id) => id === parseInt(appId));
    
    // if(matchedID){
    //   setVisible(true);
    // }
  // };
  
  //  handleBtnAbility(parseInt(appId));

  const app = apps.find((app) => app.id === parseInt(appId));
  const { id, image, title, companyName, downloads, ratingAvg, reviews, size, ratings, description } = app;
  return (
    <>
      <Helmet>
        <title>{title + " - " + "HeroAI"}</title>
      </Helmet>
      <div className="max-w-360 mx-auto py-20">
        <div className="flex items-center gap-10">
          <img className="max-w-90 w-full" src={image} alt="" />
          <div className="flex-1">
            <h1 className="text-4xl font-semibold mb-2">{title}</h1>
            <p className="font-light">
              Developed by <span className="text-primary">{companyName}</span>
            </p>
            <hr className="border-mist-200 my-8" />
            <div className="flex gap-6 mb-8">
              <div className="w-full max-w-38">
                <img className="mb-3" src={downloadIcon} alt="" />
                <div>
                  <p className="text-base font-light">Downloads</p>
                  <h1 className="text-[40px] font-bold">
                    {downloads / 1000000}M
                  </h1>
                </div>
              </div>
              <div className="w-full max-w-38">
                <img className="mb-3" src={ratingIcon} alt="" />
                <div>
                  <p className="text-base font-light">Average Ratings</p>
                  <h1 className="text-[40px] font-bold">{ratingAvg}</h1>
                </div>
              </div>
              <div className="w-full max-w-38">
                <img className="mb-3" src={reviewIcon} alt="" />
                <div>
                  <p className="text-base font-light">Total Reviews</p>
                  <h1 className="text-[40px] font-bold">{reviews / 1000}K</h1>
                </div>
              </div>
            </div>
            {
              <button
                onClick={() => handleAppInstall(id)}
                className="btn btn-success"
                disabled={visible || matchedID && "disabled"}
              >
                {visible || matchedID ? "Installed" : `Install Now (${size} MB)`}
              </button>
            }
          </div>
        </div>

        <hr className="border-mist-200 my-10" />
        <h4 className="text-2xl font-semibold mb-6">Ratings</h4>
        <ReviewsChart ratings={ratings} />
        <hr className="border-mist-200 my-10" />
        <h4 className="text-2xl font-semibold mb-6">Description</h4>
        <p>{description}</p>
      </div>
    </>
  );
};

export default AppDetails;