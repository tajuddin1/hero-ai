import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { MdOutlineFileDownload } from 'react-icons/md';
import { useNavigate } from 'react-router';

const App = ({app}) => {
  const { id, image, title, downloads, ratingAvg } = app;
  const navigate = useNavigate();
  const handleAppSingle = (title, id) => {
    const slag = title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/app/${id}/${slag}`);
  };
  return (
    <div
      onClick={() => handleAppSingle(title, id)}
      className="p-3 bg-base-100 rounded-lg"
    >
      <img className="w-full rounded-md" src={image} alt="" />
      <div className="flex flex-col gap-4 pt-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="badge rounded-md badge-soft h-8 badge-success">
            <p className="flex items-center gap-1">
              <MdOutlineFileDownload className="w-5 h-5" />
              {downloads / 1000000}M
            </p>
          </div>
          <div className="badge rounded-md badge-soft h-8 badge-warning">
            <p className="flex items-center gap-1">
              <FaRegStarHalfStroke className="w-4 h-4" />
              {ratingAvg}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;