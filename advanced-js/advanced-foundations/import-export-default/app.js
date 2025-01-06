import {
  interplanetaryDestinationsArr as destinations,
  // shortSpaceTripsArr,
} from "./data.js";

import getMatchingTrips from "./searchFunction.js";

console.log(getMatchingTrips(destinations, "exotic"));
