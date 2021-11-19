const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned IP:", ip);
});

fetchCoordsByIP("50.93.12.22",(error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned Geo Coordinates:", coords);
})

fetchISSFlyOverTimes({ latitude: 53.4179, longitude: -113.5785 }, (error, riseTime) => {
  if (error) {
    console.log("Invalid latitude/longitude: ", error);
    return;
  }

  console.log("Response:", riseTime);
})