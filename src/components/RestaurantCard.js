import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
    // console.log(props);
    const { res } = props;
    // you could have used this way const RestaurantCard = ({ resName, cuisine })=>{}

    const { name,
            cuisines,
            avgRating,
            aggregatedDiscountInfoV3,
            sla } = res?.info;

    return (
        <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200'>
            <img 
                className='rounded-lg'
                alt='meghana-food-pic'
                src={CDN_URL+res.info.cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{aggregatedDiscountInfoV3?.subHeader}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
}

// Higher Order Component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLable = (RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">PROMOTED</label>
                <RestaurantCard {...props} />
            </div>
        );
    }
}

export default RestaurantCard;