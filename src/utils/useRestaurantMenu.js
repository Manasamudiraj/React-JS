import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4360207&lng=78.3765674&restaurantId=" +
        resId +
        "&catalog_qa=undefined&isMenuUx4=true&query=Shawarma&submitAction=ENTER"
    );
    const result = await data.json();
    const info = result.data;
    setResInfo(info);
  };

  return resInfo;
};

export default useRestaurantMenu;
