const RestoCard = (props) => {
  const { resData } = props;
  const { name, avgRating, sla, cloudinaryImageId, costForTwo, cuisines } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="py-2 text-sm">{cuisines.join(", ")}</h4>
      <h4 className="py-2 text-sm">{avgRating} stars</h4>
      <h4 className="py-2 text-sm">{sla.slaString}</h4>
      <h4 className="py-2 text-sm">{costForTwo}</h4>
    </div>
  );
};

export default RestoCard;
