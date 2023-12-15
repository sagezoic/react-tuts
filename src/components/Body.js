import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import RestaurantCard, { withPromotedLable } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLable(RestaurantCard);
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
  const {loggedInUser, setUserInfo} = useContext(UserContext);


  // Conditional Rendering
  // Lets club the below line of code with return
  // if(listOfRestaurants?.length ===0){
  // return <Shimmer/>;
  // }

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Looks like you are offline! Check your internet connection.</h1>;
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center justify-end">
        <div className="mx-4">
          <input
            type="text"
            className="border border-solid border-black"
            data-testid="searchInput"
            placeholder="KFC"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-red-400 m-4 rounded-lg"
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
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
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
        <div className="m-4 p-4 flex justify-end ">
          <label className="mr-2">Username:</label>
          <input className="border border-black px-2" value={loggedInUser} onChange={(e)=>{setUserInfo({name : e.target.value})}} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* Restaurant Card */}
        {/* <RestaurantCard resName='Meghana Foods' cuisine='Biryani, North Indian, Asian'/>
                <RestaurantCard resName='KFC' cuisine='Burger, Fast Food'/> Passing props to a component */}
        {filteredRestaurants?.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {" "}
            {/**The key should be at parent where we are iterating */}
            {false ? (
              <RestaurantCardPromoted res={res} />
            ) : (
              <RestaurantCard res={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
