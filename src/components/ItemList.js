import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-bold">{item.card.info.name}</span>
              <span className="">- ₹ {item.card.info.price / 100}</span>
            </div>
            <div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 bg-black text-white shadow-lg rounded-lg mx-20"> Add +</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
