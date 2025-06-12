import {BrowserRouter, Routes,Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Foodlist from './components/Foodlist.jsx'
import {AddFood} from './components/AddFood.jsx'
import UpdateFood from './components/UpdateFood.jsx'


export const APPContext = createContext(null);

function App() {
  const [FoodDatas,setFoodDatas] =useState([]);
  
  return (
    <>
    
    <APPContext.Provider value={{FoodDatas, setFoodDatas}} >
      <Navbar  />
      <div className="container mt-24 mb-12 mx-auto">
      <Routes>
            <Route index element={<Foodlist />} />
            <Route path="create" element={<AddFood />} />
            <Route path="edit/:id" element={<UpdateFood />} />
          </Routes>
      </div>
      <Footer />
    </APPContext.Provider>
    </>
  )
}

export default App
