import { useEffect, useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/mockData";
import Shimmer from "./Shimmer";

//  Normal JS variable
let listOfRestaurantsJS = [
  {
    info: {
      id: "114323",
      name: "Iscon Thal",
      cloudinaryImageId: "bd68ec66db6e8459145694c17f5aecde",
      costForTwo: "₹200 for two",
      cuisines: ["Gujarati", "Thalis", "Indian", "Sweets", "Desserts", "Jain"],
      avgRating: 3,
      avgRatingString: "3.5",
      sla: {
        deliveryTime: 26,
      },
    },
  },
  {
    info: {
      id: "405964",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "xpecpjwq215o4grwtpk2",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.1,
      avgRatingString: "4.1",
      sla: {
        deliveryTime: 31,
      },
    },
  },
];

var obj;
export const Body = () => {
  // local state variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

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

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
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
        {filteredRestaurants?.map((res) => (
          <RestaurantCard resData={res.info} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
