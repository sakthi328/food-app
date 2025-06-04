import { Button, ButtonGroup } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import FoodCard from "./Foodcard";
import AddIcon from '@mui/icons-material/Add';
import { APPContext } from "../App";
import AddFood  from "./AddFood";


export default function Foodlist(){
    
    const {FoodDatas,setFoodDatas} = useContext(APPContext);
    

    
   const deleteFood = (item,index) => {
  setFoodDatas((prev) => prev.filter((item,Index) => Index !== index));
};
  

    return <div>
        <div className="container mt-24 ml-10 ">
            <h6 className=" text-xl font-bold ">Restaurants with online food delivery</h6>
            <div><Button  variant="outlined" startIcon={<AddIcon />}>
  Add Foods
</Button></div>
          
        </div> 
        <div className="container mt-17 mb-12 mx-auto">
            <div className="grid grid-cols-4 gap-7">
               {FoodDatas.map((item, index)=><FoodCard  key={index} item={item}  index={index} deleteFood={deleteFood}  />)}
            </div>
    </div> 
     <div className="mt-4 ">
                <h1 className="text-xl  mb-4 text-center">Add Your Restorant Food</h1>
              <div className="flex justify-center items-center" ><AddFood /></div>  
            </div></div>
};

