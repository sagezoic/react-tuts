import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showIndex, setShowIndex }) => {
    const [showItems, setShowItems] = useState(false);

    const handleClick = ()=>{
        setShowItems(!showItems);
        setShowIndex();
    }

  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
        {/* Accordion Header */}
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordion Body */}
        { showItems && showIndex && <ItemList items={data.itemCards} /> }
      </div>
    </div>
  );
};

export default RestaurantCategory;
