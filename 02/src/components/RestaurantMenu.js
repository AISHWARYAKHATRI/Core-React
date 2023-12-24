import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const data = [
    {
      id: "35251643",
      name: "Regular",
      inStock: 1,
      isVeg: 1,
      isEnabled: 1,
    },
    {
      id: "35251644",
      name: "Jain",
      inStock: 1,
      isVeg: 1,
      isEnabled: 1,
    },
    {
      id: "35251645",
      name: "Swaminarayan",
      inStock: 1,
      isVeg: 1,
      isEnabled: 1,
    },
    {
      id: "60245039",
      name: "Gulab Jamun (8 Pcs)",
      price: 10115,
      inStock: 1,
      isVeg: 1,
      isEnabled: 1,
    },
    {
      id: "60245040",
      name: "Liquid Sweet [350 Gms]",
      price: 11815,
      inStock: 1,
      isVeg: 1,
      isEnabled: 1,
    },
    {
      id: "60245041",
      name: "Solid Sweet 350 Gms / 8 Pcs",
      price: 10965,
      inStock: 1,
      isVeg: 1,
      isEnabled: 1,
    },
  ];

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    setResInfo(data);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>Name of the Resaturant</h1>
      <h2>Menu</h2>
      <ul>
        {resInfo?.map((item) => (
          <li key={item?.id}>{item?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
