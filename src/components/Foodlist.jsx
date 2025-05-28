import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import StarsIcon from "@mui/icons-material/Stars";

export default function FoodList(){
    const food = [
        {
            food_url : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/f6d8a22a-fd9d-48f5-89fd-44e29bb1b6b1_770772.jpg",
            hotel_name : "Pizza Hut ",
            rating : "4.6 ",
            timeing : "40-50 mins ",
            food_name : "Pizza",
            location : "Central Bengalore ",
        },
        {
            food_url : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv",
            hotel_name : "Adil Hotel",
            rating : "4.3",
            timeing : "35-40 mins",
            food_name : "North Indian, Biryani, Tandoor",
            location : "Chhindwara Locality",
        },
        {
            food_url : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fa4944f0cfdcbca2bec1f3ab8e3db3f7",
            hotel_name : "The Fusion Lounge",
            rating : "4.2",
            timeing : "50-55 mins",
            food_name : "South Indian, Chinese, Beverages",
            location : "Railway Station",
        },
        {
            food_url : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jo9pdipf4elcuch8g55q",
            hotel_name : "Gupta Bhojnalay",
            rating : "4",
            timeing : "40-45 mins",
            food_name : "Fast Food, Indian, Beverages",
            location : "Chhindwara Locality",
        },
        {
            food_url : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ryzswg44bt7thqzkuaj4",
            hotel_name : "Sab Ghar Tak Foods",
            rating : "4.1",
            timeing : "55-60 mins",
            food_name : "North Indian, South Indian, Chinese",
            location : "Parsia Road",
        },
        {
            food_url : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uxgpy3bwmc5rsojmtw43",
            hotel_name : "Chaska Cafe",
            rating : "3.6",
            timeing : "50-55 mins",
            food_name : "Cafe, Italian, Chinese",
            location : "Chhindwara Locality",
        },
        {
            food_url : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xph0vf5pvbxjf8xchwjk",
            hotel_name : "Champara Handi Restaurant",
            rating : "4.3",
            timeing : "40-45 mins",
            food_name : "North Indian",
            location : "Nagpur Road",
        },
        {
            food_url : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yzgqriufpzmloogcn2vl",
            hotel_name : "Jai Ganesh Bhojnalaya",
            rating : "4.1",
            timeing : "40-45 mins",
            food_name : "North Indian, South Indian",
            location : "Bus Stand",
        },
        {
            food_url : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/14/075a4401-3091-45f9-a2f1-1b22024d51df_925308.jpg",
            hotel_name : "Hotel Sai Bajrang Family Restaurant",
            rating : "4.3",
            timeing : "50-55mins",
            food_name : "Pure Veg, North Indian, Chinese",
            location : "Chhindwara City",

        },
        {
            food_url : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/2469fa88ee9b0b5d1366ba88f2a7fa7f",
            hotel_name : "Indian Coffee House",
            rating : "4.6",
            timeing : "45-50 mins",
            food_name : "South Indian, Chinese, Fast Food",
            location : "Khajri Chawk",
        },
        {
            food_url : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/auczcmkdvvxzt2mswvcc",
            hotel_name : "Bharat Mewad Ice Cream",
            rating : "4.6",
            timeing : "50-55 mins",
            food_name : "IceCream, Desserts, Beverages",
            location : "Chhindwara City",
        },
        {
            food_url : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/906c0affa7d8ff78a3e4db88b4433cde",
            hotel_name : "Italy The Pizza",
            rating : "4",
            timeing : "60-65 mins",
            food_name : "Pizzas, Fast Food,Beverages",
            location : "Chindwara Locality",
        },
        {
            food_url : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/crncfqmsuosriqcrp9ez",
            hotel_name : "Chingchong Momo",
            rating : "4.1",
            timeing : "80-85 mins",
            food_name : "Momos, Chinese",
            location : "Prasia Road",
        },
        {
            food_url : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/e2hpvt6o23msw0ibtuqv",
            hotel_name : "Jain Food 4 You",
            rating : "3.8",
            timeing : "55-60 mins",
            food_name : "North Indian",
            location : "Chindwara Locality",
        },
        {
            food_url : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/f780ed3e2723fa5e0c72b0552962fca7",
            hotel_name : "Chawla Dillivala - Family",
            rating : "3.4",
            timeing : "55-60 mins",
            food_name : "Indian, Chinese, Snacks",
            location : "Mohan Nagar",
        },
    ]
    return <div className="container mt-24 mb-12 mx-auto">
            <div className="grid grid-cols-4">
               { food.map((item)=> (
                <Card>
                        <CardContent>
                            <CardMedia component="img" className="h-56 object-fit-cover object-center" src={item.food_url} alt={item.food_name} />
                            <div className="py-2">
                                <h4 className="text-xl font-bold">{item.hotel_name}</h4>
                                <div className="flex gap-1 py-1">
                                    <StarsIcon className="text-green-700"/>
                                    <p className="font-semibold">{item.rating} </p>
                                    <strong>{item.timeing}</strong>
                                </div>
                                <div className="text-gray-500 font-semibold">
                                    <p>{item.food_name}</p>
                                    <p>{item.location}</p>
                                </div>
                            </div>
                        </CardContent>
                </Card>
                ))}
            </div>
    </div>
};

