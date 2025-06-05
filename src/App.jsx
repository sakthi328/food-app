import {BrowserRouter, Routes,Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Foodlist from './components/Foodlist.jsx'
import {AddFood} from './components/AddFood.jsx'


export const APPContext = createContext(null);


const data = [
        {
          id:1 , 
          restorant_name:"Pizza Hut",
            food_image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/f6d8a22a-fd9d-48f5-89fd-44e29bb1b6b1_770772.jpg",
             rating:4.6,
            expected_delivery: "40-50 mins",
            food_name:"pizza",
            location:"Central Bengalore"
        },
        {
          id:2,
            restorant_name:"Adil Hotel",
            food_image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv",
             rating:4.2,
            expected_delivery: "35-40mins",
            food_name:"Biryani",
            location:"Chhindwara Locality"
        },
        {
          id:3,
            restorant_name:"The Fusion Lounge",
            food_image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fa4944f0cfdcbca2bec1f3ab8e3db3f7",
             rating:4.1,
            expected_delivery: "50-55 mins",
            food_name:"south Indian",
            location:"Railway Station"
        },
        {
          id:4,
            restorant_name:"Gupta Bhojnalay",
            food_image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jo9pdipf4elcuch8g55q",
             rating:4.3,
            expected_delivery: "40-45mins",
            food_name:"Fast food",
            location:"Chhindwara Locality"
        },
        {
          id:5,
            restorant_name:"Chaska Cafe",
            food_image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uxgpy3bwmc5rsojmtw43",
             rating:4.1,
            expected_delivery: "50-55 mins",
            food_name:"Cafe",
            location:"Chhindwara Locality"
        }
    ]

function App() {
  const [FoodDatas,setFoodDatas] =useState(data);
  

  return (
    <>
    <APPContext.Provider value={{FoodDatas, setFoodDatas}} >
      <Navbar  />
      <div className="container mt-24 mb-12 mx-auto">
      <Routes>
            <Route index element={<Foodlist />} />
            <Route path="create" element={<AddFood />} />
          </Routes>
      </div>
      <Footer />
    </APPContext.Provider>
    </>
  )
}

export default App
