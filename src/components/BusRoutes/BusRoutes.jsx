import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const BusRoutes = () => {
  useEffect(() => {
    getBusRoutes();
  }, []);

  const dispatch = useDispatch();
  const [selectBusRoute, setSelectBusRoute] = useState("");
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
    console.log(e.target.value);
    console.log("What is happening in BusRoutes SET_BUS_ROUTE", selectBusRoute);
    dispatch({ type: "SET_BUS_ROUTE", payload: e.target.value });
    console.log(selectBusRoute);
  };

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
