const RestoCard = (props) => {
  const { resData } = props;
  const { name, avgRating, sla, cloudinaryImageId, costForTwo, cuisines } =
    resData?.info;

  return (
    <div className="resto-card">
      <img
        className="food-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3 className="resto-name">{name}</h3>
      <h4 className="resto-name">{cuisines.join(", ")}</h4>
      <h4 className="resto-rating">{avgRating} stars</h4>
      <h4 className="time">{sla.slaString}</h4>
      <h4 className="cost-for-two">{costForTwo}</h4>
    </div>
  );
};

export default RestoCard;
