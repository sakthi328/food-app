import { Button, TextField } from "@mui/material";
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

export const ValidationSchema = Yup.object({
  restaurant_name: Yup.string().required("Restaurant Name is required"),
  food_image: Yup.string().url().required("Food Image is required"),
  rating: Yup.number().min(1).max(5).required("Rating is required"),
  expected_delivery: Yup.string().required(
    "Expected Delivery Time is required"
  ),
  food_name: Yup.string().required("Food Name is required"),
  location: Yup.string().required("Location is required"),
});

export function AddFood(){
    
    const navigate = useNavigate()
    const formik = useFormik({
    initialValues: {
      restaurant_name: "",
      food_image: "",
      rating: 1,
      expected_delivery: "",
      food_name: "",
      location: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      createFood(values);
    },
  });

        // console.log(formdata)
    
        // const handleOnChage  = (event)=>{
        //     console.log(event);
        //     const key = event.target.name
        //     setFormData(prev=>({...prev,[key]:event.target.value}))
            
            
        // }

        const createFood = (values) =>{
            try {
                const payload = JSON.stringify(values)
                fetch("https://684235efe1347494c31c255d.mockapi.io/foods",{method:"POST", headers:{'content-type':'application/json'},body:payload}).then((response)=>response.json()).then((data)=>{console.log(data); navigate('/');}).catch(error=>console.log(error))
            } catch (error) {
                console.log(error)
            }
        }

        // const handleSubmit = ()=>{
        //     createFood();
        // }

    return<div className="my-4 max-w-[600px] mx-auto">
        <h1 className="text-2xl mb-8 font bold text-center">Add Your Restaurant Food</h1>
        <form onSubmit={formik.handleSubmit} className="grid gap-4">
        <TextField
          fullWidth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.errors.restaurant_name && formik.touched.restaurant_name}
          helperText={
            formik.errors.restaurant_name &&
            formik.touched.restaurant_name &&
            formik.errors.restaurant_name
          }
          value={formik.values.restaurant_name}
          className="!mb-2"
          id="restaurant_name"
          name="restaurant_name"
          label="Restaurant Name"
        />
        <TextField
          fullWidth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.errors.food_image && formik.touched.food_image}
          helperText={
            formik.errors.food_image &&
            formik.touched.food_image &&
            formik.errors.food_image
          }
          value={formik.values.food_image}
          className="!mb-2"
          type="url"
          id="food_image"
          name="food_image"
          label="Food Image URL"
        />
        <TextField
          fullWidth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.errors.rating && formik.touched.rating}
          helperText={
            formik.errors.rating &&
            formik.touched.rating &&
            formik.errors.rating
          }
          value={formik.values.rating}
          className="!mb-2"
          type="number"
          id="rating"
          name="rating"
          label="Rating"
        />
        <TextField
          fullWidth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.errors.food_name && formik.touched.food_name}
          helperText={
            formik.errors.food_name &&
            formik.touched.food_name &&
            formik.errors.food_name
          }
          value={formik.values.food_name}
          className="!mb-2"
          id="food_name"
          name="food_name"
          label="Food Name"
        />
        <TextField
          fullWidth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.errors.expected_delivery && formik.touched.expected_delivery
          }
          helperText={
            formik.errors.expected_delivery &&
            formik.touched.expected_delivery &&
            formik.errors.expected_delivery
          }
          value={formik.values.expected_delivery}
          className="!mb-2"
          id="expected_delivery"
          name="expected_delivery"
          label="Expected Delivery Time (mins)"
        />
        <TextField
          fullWidth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.errors.location && formik.touched.location}
          helperText={
            formik.errors.location &&
            formik.touched.location &&
            formik.errors.location
          }
          value={formik.values.location}
          className="!mb-2"
          id="location"
          name="location"
          label="Location"
        />    
         <div className="flex justify-end">
          <Button type="submit" variant="contained">
            Save
          </Button>
        </div>
        </form>
        </div>
}