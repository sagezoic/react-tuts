import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import resData from '../utils/mockData';

const Body = ()=>{

    // Super powerful React Variable
    // We also call it a State Variable: lingo in React
    // Local State Variable - Super powerful variable
    // const [listOfRestaurants, setListOfRestaurants] = useState(resData); //Array de structuring on the fly.

     const state = useState(resData);

     const [listOfRestaurants, setListOfRestaurants] = state;

    // Normal JS Variable
    // let listOfRestaurants = resData;

    // As you are missing hooks so your UI will won't update as you are changing your listOfRestaurants. How we should update UI?

    return (
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' onClick={()=>{
                    // Filter logic here
                    const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4);
                    setListOfRestaurants(filteredList);
                }
                }>
                    Top Rated Restaurant
                </button> 
            </div>
            <div className='res-container'>
                {/* Restaurant Card */}
                {/* <RestaurantCard resName='Meghana Foods' cuisine='Biryani, North Indian, Asian'/>
                <RestaurantCard resName='KFC' cuisine='Burger, Fast Food'/> Passing props to a component */}
                {listOfRestaurants?.map((res)=><RestaurantCard key={res.info.id} res={res} />)}
            </div>
        </div>
    );
}

export default Body;