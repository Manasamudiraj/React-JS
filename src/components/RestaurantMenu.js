import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const index =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .title === "Recommended"
      ? 1
      : 2;
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
              <p className="price">
                Rs.
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </p>
              <hr style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
