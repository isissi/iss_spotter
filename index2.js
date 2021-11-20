const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require("./iss_promised");

const formatedTime = function (passTimes) {
  for (const time of passTimes) {
    const date = new Date(0);
    date.setUTCSeconds(time.risetime);

    console.log(`Next pass at ${date} for ${time.duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
 .then((times) => {
   formatedTime(times);
 })
.catch((error => {
  console.log("Something went wrong: ", error.message);
}))
