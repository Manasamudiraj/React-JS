import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showList, setShowIndex }) => {
  // uncontrolled component
  // const [showList, setShowList] = useState(false);
  const handleClick = () => {
    // setShowList(!showList);
    setShowIndex();
  };
  return (
    <div className="w-6/12 shadow-lg bg-gray-100 mx-auto my-5 p-4">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>↓</span>
      </div>
      {showList && <ItemsList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
