import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="food-item"
          className=" p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="p-2">
              <span>{item.card.info.name}</span>
              <span>
                -Rs.
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="3/12">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-white text-green-600 shadow-lg"
                onClick={() => handleAddItems(item)}
              >
                ADD
              </button>
            </div>
            <img
              className="w-40 p-4"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                item.card.info.imageId
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
