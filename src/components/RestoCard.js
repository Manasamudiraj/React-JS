const RestoCard = (props) => {
  const { resData } = props;
  const { name, o2FeaturedImage, rating, cft } = resData?.info;

  return (
    <div className="resto-card">
      <img className="food-image" src={o2FeaturedImage.url}></img>
      <h3 className="resto-name">{name}</h3>
      <h4 className="resto-rating">{rating.aggregate_rating} rating</h4>
      <h4 className="time">{cft.text}</h4>
    </div>
  );
};

export default RestoCard;
