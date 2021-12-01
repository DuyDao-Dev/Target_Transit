const express = require("express");
const router = express.Router();
const axios = require("axios");

//This router will get all routes from the API
router.get("/getAllRoutes", (req, res) => {
  axios
    .get(`http://svc.metrotransit.org/NexTrip/Routes?format=json`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
