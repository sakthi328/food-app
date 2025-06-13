import {BrowserRouter, Routes,Route } from 'react-router-dom'
import { Box, createTheme, Paper, ThemeProvider, Toolbar } from "@mui/material"
import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Foodlist from './components/Foodlist.jsx'
import {AddFood} from './components/AddFood.jsx'
import UpdateFood from './components/UpdateFood.jsx'
import Todo from './Todo.jsx'


export const APPContext = createContext(null);

function App() {
  const [FoodDatas,setFoodDatas] =useState([]);
  const [mode, setMode] = useState('light');
   const theme = createTheme({
    palette:{
      mode,
      primary:{
        main: "#1FC8B9",
        dark: "14A996"
      }
    }
  })
  
  
  return (
    <>
    
    <APPContext.Provider value={{FoodDatas, setFoodDatas, mode, setMode}} >
       <ThemeProvider theme={theme}>
      <Paper>
      <Navbar  />
      <div className="container pt-14 pb-12 mx-auto">
      <Routes>
            <Route index element={<Foodlist />} />
            <Route path="create" element={<AddFood />} />
            <Route path="edit/:id" element={<UpdateFood />} />
              <Route path="my-todo" element={<Todo />} />
          </Routes>
      </div>
      <Footer />
        </Paper>
      </ThemeProvider>
    </APPContext.Provider>
    </>
  )
}

export default App
