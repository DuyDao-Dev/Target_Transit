import axios from "axios";
import React from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const BusRoutes = () => {
  
  useEffect(() => {
    getBusRoutes();
  }, []);

  // const [busRoute, setBusRoute] = useState([]);
  const dispatch = useDispatch();
  const busRoutes = useSelector((store) => store.busRoutesReducer);

  const getBusRoutes = () => {
    axios({
        method: "GET",
        url: '/api/busRoutes/getAllRoutes',
      })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "GET_BUS_ROUTES",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleChange = (e) => {
  //   setRoute(e.target.value);
  //   dispatch({ type: "SET_ROUTE", payload: e.target.value });
  // };
console.log(busRoutes);

  return (
    <div>
      {/* react drop down menu */}
      {/* need to map over the bus routes and display them in the drop down menu */}
      {/* {busRoutes &&
        busRoutes.map((routes, index) => {
          return (
            <div key={index}>
              <select onChange={handleChange}>
                <option value={routes}>{routes}</option>
              </select>
            </div>
          );
        })} */}
    </div>
  );
};

export default BusRoutes;
