import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: '#f0f0f0',
};

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
        <div className='res-card' style={styleCard}>
            <img 
                className='res-logo'
                alt='meghana-food-pic'
                src={CDN_URL+res.info.cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{aggregatedDiscountInfoV3?.subHeader}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
}

export default RestaurantCard;