import { useEffect, useState } from "react";

import { data } from "./mockDataMenu";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  // fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://google.com/");
    } catch (error) {}
    setResInfo(data);
  };
  return resInfo;
};

export default useRestaurantMenu;
