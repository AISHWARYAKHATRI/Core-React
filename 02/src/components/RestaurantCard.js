import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
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
  } = props?.resData;
  return (
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
  );
};

export default RestaurantCard;
