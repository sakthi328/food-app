import { useContext } from "react";
import FoodCard from "./FoodCard";
import { APPContext } from "../App";

export default function Foodlist(){
    const {FoodDatas} = useContext(APPContext);
    
    return <div className="container mt-24 mb-12 mx-auto">
        <h1 className=" font-bold mb-6 text-2xl">Restaurants with online food delivery</h1>
            <div className="grid grid-cols-4 gap-4">
                
                {FoodDatas.map((item, index)=><FoodCard key={index} item={item}/>)}
                
            </div>
    </div>
};




