import axios from "axios";
import React from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import * as React from "react";

const BusRoutes = () => {
  useEffect(() => {
    getBusRoutes();
  }, []);

  const dispatch = useDispatch();
  const [selectBusRoute, setSelectBusRoute] = useState([]);
  const busRoutes = useSelector((store) => store.getBusRoutesReducer);

  const API_URI = "http://localhost:5000";

  const getBusRoutes = () => {
    axios({
      method: "GET",
      url: `${API_URI}/api/busRoutes/getAllRoutes`,
    })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "GET_BUS_ROUTES",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("This error" + error);
      });
  };

  const handleChange = (e) => {
    setSelectBusRoute(e.target.value);
    dispatch({ type: "SET_BUS_ROUTE", payload: e.target.value });
  };

  console.log(setSelectBusRoute);
  console.log(selectBusRoute);

  return (
    <Box sx={{ minWidth: 120 }}>
       <FormControl fullWidth>
         <InputLabel id="demo-simple-select-label">Select Route</InputLabel>
         <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={selectBusRoute}
           label="Routes"
           onChange={handleChange}
         >
           {busRoutes.map((route) => (
             <MenuItem value={route.Route}>{route.Description}</MenuItem>
           ))}
         </Select>
       </FormControl>
     </Box>
  );
};

export default BusRoutes;

