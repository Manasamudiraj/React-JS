import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4360207&lng=78.3765674&restaurantId=27666&catalog_qa=undefined&isMenuUx4=true&query=Shawarma&submitAction=ENTER"
    );
    const result = await data.json();
    console.log(result);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};
export default RestaurantMenu;
