const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
} = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("50.93.12.22",(error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned Geo Coordinates:", coords);
// })

// fetchISSFlyOverTimes({ latitude: 53.4179, longitude: -113.5785 }, (error, times) => {
//   if (error) {
//     console.log("Invalid latitude/longitude: ", error);
//     return;
//   }

//   console.log("Response:", times);
// })

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  formatedTime(passTimes);
});

const formatedTime = function (passTimes) {
  for (const time of passTimes) {
    const date = new Date(0);
    date.setUTCSeconds(time.risetime);

    console.log(`Next pass at ${date} for ${time.duration} seconds!`);
  }
};
