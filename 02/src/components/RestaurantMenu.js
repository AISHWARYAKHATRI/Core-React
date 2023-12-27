import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenuInfo = useRestaurantMenu(resId);

  return resMenuInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>Name of the Resaturant</h1>
      <h2>Menu</h2>
      <ul>
        {resMenuInfo?.map((item) => (
          <li key={item?.id}>{item?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
