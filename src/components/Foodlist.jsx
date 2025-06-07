import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";


export default function Foodlist(){
    
    const [FoodDatas, setFoodDatas] = useState([]);

    const fetchFood = () => {
    try {
      fetch("https://684235efe1347494c31c255d.mockapi.io/foods", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => setFoodDatas(data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);
    
    
    return <div className="container mt-24 mb-12 mx-auto">
        {FoodDatas?<div><h1 className=" font-bold mb-6 text-2xl">Restaurants with online food delivery</h1>
            <div className="grid grid-cols-4 gap-4">
                {FoodDatas.map((item, index)=><FoodCard key={index} item={item} fetchFood={fetchFood}/>)}
                
            </div>
    </div>:<p className="text-center">Loading ...</p>}</div>
};





