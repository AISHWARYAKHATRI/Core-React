import { useEffect, useState, useEffect } from "react";

import RestaurantCard, { withPrompotedLabel } from "./RestaurantCard";
import { resObj } from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  // local state variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);

  const RestaurantCardPromoted = withPrompotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  console.log("sdfsd");

  const fetchData = async () => {
    // const res = await fetch(
    //   "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0061051&lng=72.5164075&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // const data = await res.json();
    setListOfRestaurant(resObj);
    setFilteredRestaurant(resObj);
  };

  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection!
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI
              const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurants = listOfRestaurants?.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((res) => {
          // if the restaurant is promoted then add a prompoted label to it
          if (res?.info?.promoted === true)
            return (
              <RestaurantCardPromoted resData={res.info} key={res.info.id} />
            );
          else return <RestaurantCard resData={res.info} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
