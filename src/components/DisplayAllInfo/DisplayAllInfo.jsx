import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const DisplayAllInfo = () => {

    const setBusRouteReducer = useSelector((store) => store.setBusRouteReducer);
    const setBusDirectionReducer = useSelector((store) => store.setBusRoutesReducer);
    const setBusStopReducer = useSelector((store) => store.setBusStopsReducer);

    useEffect(() => {
        console.log(setBusRouteReducer);
        console.log(setBusDirectionReducer);
        console.log(setBusStopReducer);
    }, [setBusRouteReducer, setBusDirectionReducer, setBusStopReducer]);

    const getAllInfoReducer = useSelector((store) => store.getAllInfoReducer);

    const API_URI = "http://localhost:5000";

    const getAllInfo = () => {
        axios({
            method: "GET",
            url: `${API_URI}/api/busRoutes/getAllInfo/${setBusRouteReducer}/${setBusDirectionReducer}/${setBusStopReducer}`,
        })
    }

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Route Name</TableCell>
                <TableCell align="right">Route</TableCell>
                <TableCell align="right">Destination</TableCell>
                <TableCell align="right">Departs</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getAllInfoReducer.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.Route}</TableCell>
                  <TableCell align="right">{row.Destination}</TableCell>
                  <TableCell align="right">{row.Depart}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );

}

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