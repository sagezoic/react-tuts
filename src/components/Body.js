import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body component rendering.....");
  // This hook will be called after this component rendered.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // Optional chaining: good way to handle the data
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
  };

  // Conditional Rendering
  // Lets club the below line of code with return
  // if(listOfRestaurants?.length ===0){
  // return <Shimmer/>;
  // }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="KFC"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchText
              console.log(searchText);
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* Restaurant Card */}
        {/* <RestaurantCard resName='Meghana Foods' cuisine='Biryani, North Indian, Asian'/>
                <RestaurantCard resName='KFC' cuisine='Burger, Fast Food'/> Passing props to a component */}
        {filteredRestaurants?.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}> {/**The key should be at parent where we are iterating */}
            <RestaurantCard res={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
