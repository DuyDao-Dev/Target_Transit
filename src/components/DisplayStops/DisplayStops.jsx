import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const BusStops = () => {
  const setBusRouteReducer = useSelector((store) => store.setBusRouteReducer);
  const setBusDirectionReducer = useSelector(
    (store) => store.setBusDirectionReducer
  );

  useEffect(() => {
    getBusStops();
  }, [setBusRouteReducer, setBusDirectionReducer]);

  const dispatch = useDispatch();
  const [selectBusStop, setSelectBusStop] = useState("");
  const busStops = useSelector((store) => store.getBusStopReducer);

  console.log("setBusStopsReducer", setBusRouteReducer); //Data is correct when selecting a bus stop

  const API_URI = "http://localhost:5000";

  const getBusStops = () => {
    axios({
      method: "GET",
      url: `${API_URI}/api/busRoutes/allStops/${setBusRouteReducer}/${setBusDirectionReducer}`, //This one doesn't seem to work
    })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "GET_BUS_STOPS",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("This error" + error);
      });
  };

  const handleChange = (e) => {
    setSelectBusStop(e.target.value);
    dispatch({ type: "SET_BUS_STOP", payload: e.target.value });
  };

  console.log(selectBusStop);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Stop</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectBusStop}
          label="Routes"
          onChange={handleChange}
        >
          {busStops.map((stop, index) => (
            <MenuItem key={index} value={stop.Value}>
              {stop.Text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BusStops;
