import { useLoaderData } from 'react-router';
import App from '../../Components/Card/App';

const Apps = () => {
  const apps = useLoaderData();
  return (
    <div>
      <div className="py-20 max-w-360 mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Our All Applications</h1>
          <p className="text-lg text-[#627382] mb-10 font-light">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className='mb-4'>
          <p>({apps.length}) Apps Found</p>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-10">
          {apps.map((app) => (
            <App app={app} key={app.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;