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
    <div className="flex flex-col justify-center items-center m-4">
      <h2 className="font-bold text-xl m-3">
        {resInfo.cards[0].card.card.text}
      </h2>
      <h3 className="text-lg">Menu</h3>
      <div className="m-5 p-5 flex items-center">
        <ul className="">
          {recommendData.map((item) => (
            <div>
              <li className="py-3">
                <b>{item.card.info.name}</b>
              </li>
              <p className="py-3">
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
