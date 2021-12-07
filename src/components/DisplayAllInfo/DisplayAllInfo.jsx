import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const DisplayAllInfo = () => {
  const setBusRouteReducer = useSelector((state) => state.setBusRouteReducer);
  const setBusDirectionReducer = useSelector(
    (state) => state.setBusDirectionReducer
  );
  const setBusStopReducer = useSelector((state) => state.setBusStopReducer);//Missing the word Stop which made it not work.
  const getAllInfoReducer = useSelector((store) => store.getAllInfoReducer);
    const dispatch = useDispatch();

  useEffect(() => {
    console.log(setBusRouteReducer);
    console.log(setBusDirectionReducer);
    console.log(setBusStopReducer);
    getAllInfo();
  }, [setBusRouteReducer, setBusDirectionReducer, setBusStopReducer]);

  const API_URI = "http://localhost:5000";

  const getAllInfo = () => {
    axios({
      method: "GET",
      url: `${API_URI}/api/busRoutes/getAllInfo/${setBusRouteReducer}/${setBusDirectionReducer}/${setBusStopReducer}`,
    })
      .then((res) => {
          //Need a way to get all the info from the getAllInfoReducer
        console.log(res.data);
        dispatch({
            type: "GET_ALL_INFO",
            payload: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{setBusStopReducer}</TableCell>
            <TableCell align="right">Route</TableCell>
            <TableCell align="right">Destination</TableCell>
            <TableCell align="right">Departs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getAllInfoReducer.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Route}{row.Terminal}</TableCell>
              <TableCell align="right">{row.Description}</TableCell>
              <TableCell align="right">{row.DepartureText}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DisplayAllInfo;

// return (
//     <div>
//         <tr>
//             <h2>Insert Route Name Here</h2>
//         </tr>
//         <tr>
//             <th>Route</th>
//             <th>Destination</th>
//             <th>Departs</th>
//         </tr>
//         {/* Need to map through getAllInfoReducer */}
//         {getAllInfoReducer.map((item, index) => {
//             return (
//                 <tr key={index}>
//                     <td>{item.Text}</td>
//                     <td>{item.destination}</td>
//                     <td>{item.departs}</td>
//                 </tr>
//             )
//         })}
//     </div>
// )
