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

//Returns possible Directions after user selects a route from Frontend.
router.get("/directions/:route", (req, res) => {
  console.log(req);
    const ROUTE = req.params.route;
    axios
      .get(`http://svc.metrotransit.org/NexTrip/Directions/${ROUTE}?format=json`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  //Once user selects a direction, this router will get all stops from the API
  //:route and :direction will be passed in from the frontend
  router.get("/allStops/:route/:direction", (req, res) => {
    const ROUTE = req.params.route;
    const DIRECTION = req.params.direction;
    axios
      .get(
        ` http://svc.metrotransit.org/NexTrip/Stops/${ROUTE}/${DIRECTION}?format=json`
      )
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  //Once user selects a stop, this router will get all times from the API
  router.get("/displayBus/:route/:direction/:stop", (req, res) => {
    // const ROUTE = req.params.route;
    // const DIRECTION = req.params.direction;
    const STOPID = req.params.stop;
    axios
      .get(` http://svc.metrotransit.org/NexTrip/${STOPID}?format=json`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  //This router will get the user's route, direction, and stop and display the times
  router.get("/getAllInfo/:route/:direction/:stop", (req, res) => {
    const ROUTE = req.params.route;
    const DIRECTION = req.params.direction;
    const STOPID = req.params.stop;
    axios
      .get(
        ` http://svc.metrotransit.org/NexTrip/${ROUTE}/${DIRECTION}/${STOPID}?format=json`
      )
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

module.exports = router;
