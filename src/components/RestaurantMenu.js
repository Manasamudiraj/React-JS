import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const { resId } = useParams();

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
  if (resInfo === null) {
    return <Shimmer />;
  }
  const index=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title==="Recommended"?1:2;
  const recommendData =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[index].card.card
      .itemCards;
  return (
    <div className="resto-menu-container">
      <h2>{resInfo.cards[0].card.card.text}</h2>
      <h3>Menu</h3>
      <div className="menu-items-container">
      <ul className="custom-ul">
        {recommendData.map((item) => (
          <div>
            <li className="menu-item">
              <b>{item.card.info.name}</b>
            </li>
            <p className="price">Rs.{item.card.info.defaultPrice/100||item.card.info.price/100 }</p>
            <hr style={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}/>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
