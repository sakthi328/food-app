import { useContext, useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { APPContext } from "../App";

export default function Foodlist(){
    const [count, setCount] = useState(1);
    const {FoodDatas} = useContext(APPContext);
    
    return <div className="container mt-24 mb-12 mx-auto">
            <div className="grid grid-cols-4 gap-4">
                {FoodDatas.map((item, index)=><FoodCard key={index} item={item}/>)}
                
            </div>
    </div>
};




