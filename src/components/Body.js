import RestoCard, { withPromotedLabel } from "./RestoCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //if you want to make api call without cors plugin, you can append this "https://corsproxy.io/?rest_of_url"
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4360207&lng=78.3765674&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();

    //optional chaining
    setListOfRestaurants(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();

  const RestaurantPromoted = withPromotedLabel(RestoCard);

  const { loggedIn, setUserName } = useContext(UserContext);

  if (!onlineStatus)
    return <h1>You are offline, please check your internet connection</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-xl"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            search
          </button>
        </div>
        <button
          className="px-4 bg-gray-100 h-10 rounded-xl"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredRestaurant);
          }}
        >
          Top rated restaurants
        </button>

        {/* Updating the context value everywhere */}
        <div className="search m-4 p-4">
          <label>UserName</label>
          <input
            type="text"
            className="border border-solid border-black"
            value={loggedIn}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id}>
            {" "}
            {/* true should include variable from api which has promoted value */}
            {true ? (
              <RestaurantPromoted resData={restaurant} />
            ) : (
              <RestoCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
