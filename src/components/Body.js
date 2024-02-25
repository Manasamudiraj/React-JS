import RestoCard from "./RestoCard";
import restoList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restoList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (res) => res.info.rating.aggregate_rating > 4
            );
            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="resto-container">
        {listOfRestaurants.map((restaurant) => (
          <RestoCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
