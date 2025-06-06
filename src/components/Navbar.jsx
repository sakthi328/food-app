import { AppBar, Button, Link, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const  Navbar = ()=>{
    const navigate = useNavigate();
    const listTextStyle = { whiteSpace: 'nowrap', overflow: 'visable', textOverflow: 'ellipsis' }
    return <AppBar sx={{backgroundColor:"white"}}>
       <div className="container mx-auto">
           <Toolbar>
              <div style={{display:"flex", width:"100%", alignItems:"center", justifyContent:"space-between"}}>
                  <div><img onClick={()=>navigate('/')} className="hover:cursor-pointer"  style={{width:"100px"}} src="/src/assets/logo.png" alt="Beast Food" /></div>
                  <List sx={{display:"flex", flexWrap:'nowrap', gap:1, }}>
                    <ListItem component={Link}>
                        <ListItemText className="overflow-visible whitespace-nowrap text-lg !font-extrabold overflow-ellipsis text-gray-700 hover:!text-red-700 "   primary={"About Beast Food"} />
                        </ListItem>
                    <ListItem  component={Link}>
           
                        <ListItemText className="overflow-visible whitespace-nowrap overflow-ellipsis text-gray-700 hover:!text-red-700 !font-bold" primary="Our Business"/>
                        </ListItem>
                    <ListItem  component={Link}>
           
                        <ListItemText className="overflow-visible whitespace-nowrap overflow-ellipsis text-gray-700 hover:!text-red-700 !font-bold" primary={"Delivery For Everyone"} />
                        </ListItem>
                    <ListItem component={Link}>
                        <ListItemText className="overflow-visible whitespace-nowrap overflow-ellipsis text-gray-700 hover:!text-red-700 !font-bold" onClick={() => navigate('/create')} primary="Create"/>
                    </ListItem>
                    <ListItem component={Link}>
                        <ListItemText className="overflow-visible whitespace-nowrap overflow-ellipsis text-gray-700 hover:!text-red-700 !font-bold" primary="Contact"/>
                    </ListItem>
                  </List>
              </div>
            </Toolbar>
       </div>
    </AppBar>
}


export default Navbar;