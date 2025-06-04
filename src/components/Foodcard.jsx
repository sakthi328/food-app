import { Card, CardContent, CardMedia, Fab } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import ClearIcon from '@mui/icons-material/Clear';

export default function FoodCard  ({item, deleteFood, index}){


    return <Card className=" hover:cursor-pointer hover:shadow-lg !rounded-lg">
                        <CardContent>
                            
                           <div className="relative w-full"><CardMedia component="img" className="h-56 rounded-md object-fit-cover object-center" src={item.food_image} alt={item.food_name} />
                           <Fab onClick= {() => deleteFood(item, index)}  size="small" color="gray" aria-label="delete" className="!absolute top-2 right-2 ">
  <ClearIcon />
</Fab></div> 
                            <div className="py-2">
                                <h4 className="text-xl font-bold">{item.restorant_name}</h4>
                                <div className="flex gap-1 py-1">
                                    <StarsIcon className="text-green-700"/>
                                    <p className="font-semibold">{item.rating} </p>
                                    <strong>{item.expected_delivery}</strong>
                                </div>
                                <div className="text-gray-500 font-semibold">
                                    <p>{item.food_name} </p>
                                    <p>{item.location}</p>
                                </div>
                            </div>
                        </CardContent>
                </Card>
}

