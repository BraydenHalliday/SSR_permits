//Dependencies
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

//These are for the routes
const indexRouter = require("./routes/index");
const communityRouter = require("./routes/communityAPI");
const geoCodeRouter = require("./routes/geoCodes");
const garbageRouter = require("./routes/garbageAPI");
const crimeRouter = require("./routes/crimeAPI");
const permitsRouter = require("./routes/constructionPermits");
const propertyAssessmentRouter = require("./routes/propertyAssessmentAPI");
const eventsRouter = require("./routes/eventsAPI");
const newsRouter = require("./routes/newsAPI");
const trafficRouter = require("./routes/trafficAPI");
const cityRouter = require("./routes/cityLimitsAPI");
const careersRouter = require("./routes/careersAPI");
const salaryRouter = require("./routes/salaryAPI");
const trafficIncidentsRouter = require("./routes/trafficIncidentAPI");
const communitySchoolRouter = require("./routes/communitySchools");
const populationRouter = require("./routes/populationAPI");
const calgaryPopulationRouter = require("./routes/calgaryPopulationAPI");
const trafficSignalRouter = require("./routes/trafficSignals");

const PORT = 3000;

// Create a new express server
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Telling Server to use
app.use("/coordinates", communityRouter);
app.use("/geocoordinates", geoCodeRouter);
app.use("/garbage", garbageRouter);
app.use("/crime", crimeRouter);
app.use("/propertyAssessment", propertyAssessmentRouter);
app.use("/events", eventsRouter);
app.use("/news", newsRouter);
app.use("/traffic", trafficRouter);
app.use("/city", cityRouter);
app.use("/careers", careersRouter);
app.use("/salary", salaryRouter);
app.use("/constructionPermits", permitsRouter);
app.use("/trafficIncidents", trafficIncidentsRouter);
app.use("/schools", communitySchoolRouter);
app.use("/population", populationRouter);
app.use("/calgaryPopulation", calgaryPopulationRouter);
app.use("/trafficSignals", trafficSignalRouter);

app.listen(PORT, "0.0.0.0", "localhost", () =>
  console.log(`Listening on ${PORT}`)
);

module.exports = app;
