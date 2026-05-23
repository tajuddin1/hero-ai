import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { MdOutlineFileDownload } from 'react-icons/md';

const List = ({ app, handleUninstall }) => {
  const { id, image, title, downloads, ratingAvg, size } = app;

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-base-100">
      <img className="max-w-20 rounded-md" src={image} alt="" />
      <div className="flex-1">
        <h4 className="text-xl mb-4">{title}</h4>
        <div className="flex gap-4 items-center">
          <p className="flex w-18 items-center gap-1 text-success">
            <MdOutlineFileDownload className="w-5 h-5" />
            {downloads / 1000000}M
          </p>
          <p className="flex w-15 items-center gap-1 text-warning">
            <FaRegStarHalfStroke className="w-4 h-4" />
            {ratingAvg}
          </p>
          <p className="flex w-15 items-center gap-1 font-light text-mist-700">
            {size}MB
          </p>
        </div>
      </div>
      <button onClick={() => handleUninstall(id)} className="btn btn-success">
        Uninstall
      </button>
    </div>
  );
};

export default List;