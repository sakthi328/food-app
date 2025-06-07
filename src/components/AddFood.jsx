import { Button, TextField } from "@mui/material";
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddFood(){
    
    const navigate = useNavigate()
    const [formdata, setFormData] = useState({
            restaurant_name: "",
            food_image:"",
            rating:0,
            expected_delivery: "",
            food_name:"",
            location:""
        })

        console.log(formdata)
    
        const handleOnChage  = (event)=>{
            console.log(event);
            const key = event.target.name
            setFormData(prev=>({...prev,[key]:event.target.value}))
            
            
        }

        const createFood = () =>{
            try {
                const payload = JSON.stringify(formdata)
                fetch("https://684235efe1347494c31c255d.mockapi.io/foods",{method:"POST", headers:{'content-type':'application/json'},body:payload}).then((response)=>response.json()).then((data)=>{console.log(data); navigate('/');}).catch(error=>console.log(error))
            } catch (error) {
                console.log(error)
            }
        }

        const handleSubmit = ()=>{
            createFood();
        }

    return<div className="my-4 max-w-[600px] mx-auto">
        <h1 className="text-2xl mb-8 font bold text-center">Add Your Restaurant Food</h1>
        <form className="grid gap-4">
            <TextField fullWidth onChange={(event)=>setFormData((prev)=>({...prev,restaurant_name: event.target.value}))} value={formdata.restaurant_name} className="!mb-2" id="restaurant_name" name="restaurant_name" label="Restaurant Name" />
            <TextField fullWidth onChange={handleOnChage} value={formdata.food_image} className="!mb-2" type="url" id="food_image" name="food_image" label="Food Image URL" />
            <TextField fullWidth onChange={handleOnChage} value={formdata.rating} className="!mb-2" type="number" id="rating" name="rating" label="Rating" />
            <TextField fullWidth onChange={handleOnChage} value={formdata.food_name} className="!mb-2" id="food_name" name="food_name" label="Food Name" />
            <TextField fullWidth onChange={handleOnChage} value={formdata.expected_delivery} className="!mb-2" id="expected_delivery" name="expected_delivery" label="Expected Delivery Time (mins)" />
            <TextField fullWidth onChange={handleOnChage} value={formdata.location} className="!mb-2" id="location" name="location" label="Location" />
            <div className="flex justify-end"><Button onClick={handleSubmit} variant="contained">Save</Button></div>
        </form>
    </div>
}