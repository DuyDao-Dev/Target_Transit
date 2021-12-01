// const express = require("express");
// const router = express.Router();
// const axios = require("axios");

// router.get("/:direction", (req, res) => {
//   const direction = req.params.direction;
//   axios
//     .get(
//       ` http://svc.metrotransit.org/NexTrip/Stops/{ROUTE}/{DIRECTION}?format=json`
//     )
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });
