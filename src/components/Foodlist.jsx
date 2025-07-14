import { useEffect, useState, useLayoutEffect, useMemo, useRef } from "react";
import FoodCard from "./Foodcard";
import { TextField } from "@mui/material";
export default function Foodlist() {

  const [FoodDatas, setFoodDatas] = useState([]);
  const [search, setSearch] = useState("")
  // const inputRef = useRef();
  // const divref = useRef();



  const fetchFood = async () => {
    try {
     const response = await fetch(`${import.meta.env.VITE_API_URL}/foods`, {
        method: "GET",
      })
         const data = await response.json();
        console.log(data);
      setFoodDatas(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(search)

  useLayoutEffect(() => {
    //  inputRef.current.focus();
    fetchFood();
  }, []);

  // useEffect(()=>{
  //   divref.current.scrollIntoView({behavior:"smooth"})
  // },[FoodDatas])

  const filterdFoods = useMemo(() => {
    if (search != "") {
      return FoodDatas.filter(food => food.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      return FoodDatas
    }
  }, [search, FoodDatas])


  return <div className="container mt-8 mb-12 mx-auto">



    <TextField size="small" placeholder="Search for foods" className="!mb-2 w-80 " value={search} onChange={event => setSearch(event.target.value)} name='search' />

    {/* <button onClick={()=>inputRef.current.focus()}>focus</button> */}

    {FoodDatas ? <div><h1 className=" font-bold mb-6 text-2xl">Restaurants with online food delivery</h1>
      <div className="grid grid-cols-4 gap-4">
        {filterdFoods.map((item, index) => <FoodCard key={index} item={item} fetchFood={fetchFood} />)}

      </div>
    </div> : <p className="text-center">Loading ...</p>}
    {/* <div ref={divref}></div> */}


  </div>
};





