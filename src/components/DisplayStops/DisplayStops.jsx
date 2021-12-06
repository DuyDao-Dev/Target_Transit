// import axios from "axios";
// import React from "react";
// // import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// // import * as React from "react";

// // const BusRoutes = () => {
// //   useEffect(() => {
// //     getBusRoutes();
// //   }, []);

//   // const [busRoute, setBusRoute] = useState([]);
//   const dispatch = useDispatch();
//   const [selectBusDirection, setSelectBusDirection] = useState([]);
//   const busRoutes = useSelector((store) => store.busRoutesReducer);

//   const API_URI = "http://localhost:5000";

//   const DisplayStops = () => {
//     axios({
//       method: "GET",
//       url: `${API_URI}/api/busRoutes/allStops`,
//     })
//       .then((response) => {
//         console.log(response.data);
//         dispatch({
//           type: "GET_BUS_DIRECTION",
//           payload: response.data,
//         });
//       })
//       .catch((error) => {
//         console.log("This error" + error);
//       });
//   };

//   const handleChange = (e) => {
//     setSelectBusDirection(e.target.value);
//     dispatch({ type: "SET_BUS_DIRECTION", payload: e.target.value });
//   };

//   console.log(setSelectBusDirection);
//   console.log(selectBusDirection);

//   return (
//     <Box sx={{ minWidth: 120 }}>
//        <FormControl fullWidth>
//          <InputLabel id="demo-simple-select-label">Select Stop</InputLabel>
//          <Select
//            labelId="demo-simple-select-label"
//            id="demo-simple-select"
//            value={selectBusDirection}
//            label="Routes"
//            onChange={handleChange}
//          >
//            {busRoutes.map((route) => (
//              <MenuItem value={route.Direction}>{route.Direction}</MenuItem>
//            ))}
//          </Select>
//        </FormControl>
//      </Box>
//   );
// };

// export default DisplayStops;

