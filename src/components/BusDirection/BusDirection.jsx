import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const BusDirection = () => {
  
     const setBusRoutesReducer = useSelector((store) => store.setBusRoutesReducer);
    
     useEffect(() => {
    getBusDirection();
  }, [setBusRoutesReducer]); //Figured out it was not calling this state on load so the URL was not passing the selected route to Directions router

  const dispatch = useDispatch();
  const [selectBusDirection, setSelectBusDirection] = useState('');
  const setBusDirection = useSelector((store) => store.getBusDirectionReducer);
 
  console.log("setBusRoutesReducer", setBusRoutesReducer); //Data is correct when selecting a bus route

  const API_URI = "http://localhost:5000";


  const getBusDirection = () => {
    axios({
      method: "GET",
        url: `${API_URI}/api/busRoutes/directions/${setBusRoutesReducer}`, //This one doesn't seem to work
    })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "GET_BUS_DIRECTION",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("This error" + error);
      });
  };

  const handleChange = (e) => {
    setSelectBusDirection(e.target.value);
    dispatch({ type: "SET_BUS_DIRECTION", payload: e.target.value });
  };

  console.log(selectBusDirection);

  return (
    <Box sx={{ minWidth: 120 }}>
       <FormControl fullWidth>
         <InputLabel id="demo-simple-select-label">Select Direction</InputLabel>
         <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={selectBusDirection}
           label="Routes"
           onChange={handleChange}
         >
           {setBusDirection.map((route) => (
             <MenuItem value={route.Value}>{route.Text}</MenuItem>
           ))}
         </Select>
       </FormControl>
     </Box>
  );
};

export default BusDirection;

