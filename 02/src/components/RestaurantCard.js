import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log(props);
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  const {
    name,
    cloudinaryImageId,
    avgRatingString,
    cuisines,
    costForTwo,
    sla,
    id,
  } = props?.resData;
  return (
    <Link to={`/restaurants/${id}`}>
      <div className="res-card" style={styleCard}>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
          className="res-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRatingString}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime}</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;

// Higher order component

// input - Restaurant => RestaurantCardPrompoted
// output - Returns a component
export const withPrompotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label htmlFor="absolute bg-black text-white p-2 m-2 rouned-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
