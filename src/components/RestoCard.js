const RestoCard = (props) => {
  const { resData } = props;
  const { name, avgRating, sla, cloudinaryImageId, costForTwo } = resData?.info;

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
      <h4 className="resto-rating">{avgRating} rating</h4>
      <h4 className="time">{sla.slaString}</h4>
      <h4 className="time">{costForTwo}</h4>
    </div>
  );
};

export default RestoCard;
