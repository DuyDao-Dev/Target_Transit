const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });
  

// Route includes
const busRoutesRouter = require('./routes/busRoutes.router');
const busDirectionRouter = require('./routes/busDirection.router');
// const displayStopsRouter = require('./routes/displayStops.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/* Routes */
app.use('/api/busRoutes', busRoutesRouter);
// app.use('/api/busDirection', busDirectionRouter);
// app.use("/api/displayStops", displayStopsRouter);

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
